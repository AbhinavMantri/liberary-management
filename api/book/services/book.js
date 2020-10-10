const { models, sequelize } = require("../../dbConnection");
const { USER_ROLES } = require("../../utils");

module.exports = {
    addProduct: async function(data) {
       const book = await models.Book.create({ title: data.title, body: data.body });
       return book;
    },
    getLiked: async function(id, user) {
        const book = await this.getBook(id);
        return book.hasRead(user);
    },
    getBook: async function(id, user) {
        const book = await models.Book.findOne({ 
            where: { id }, attributes: {
                include: [
                    "id", "title", "body",
                [
                    sequelize.literal(`(
                        SELECT COUNT(user_id) FROM user_history as h
                        WHERE h.user_id = ${user.id} AND h.book_id = ${id}
                    )`),
                    'marked'   
                ]
            ]},
            
        });
        
        const obj = {};

        if(user.role === USER_ROLES.ADMIN) 
            obj.reviews = await book.getReviews({ attributes: ["email"], joinTableAttributes: ["comment", "rating"] });
        else
            obj.review = await models.BookReview.findOne({ 
                where: { user_id: user.id, book_id: id }, 
                attributes: ["comment", "rating"]  
            });;

        return {book, ...obj};
    },
    getBooks: async function() {
        return models.Book.findAll({ attributes: ["id", "title"] });
    },
    updateProduct: async function(data, id) {
       return models.Book.update({ title: data.title, body: data.body }, { where: { id }});
    },
    deleteProduct: async function(id) {
        return models.Book.destroy({ where: { id } });
    },
    getReviews: async function(id) {
        const book = await this.getBook(id);
        return book.getReviews({ attributes: ["email"], joinTableAttributes: ["comment", "rating"] });
    },
    getReview: async function(id, user) {
        return BookReviewService.getReview(id, user.id);
    },
    addReview: async function(review, id, user) {
        // const book = await this.getBook(id);
        const existReview = await models.BookReview.findOne({ where: { book_id: id, user_id: user.id }, attributes: ["book_id"] });
       
        if(!existReview)
            return sequelize.query(`INSERT INTO book_review (comment, rating, book_id, user_id) VALUES ('${review.comment}','${review.rating}', ${id}, ${user.id})`)
            // return book.addReview(user, { through: { comment: review.comment, rating: review.rating } });
        else 
            return Promise.reject(new Error("You already reviewed this book"));
    } 
};
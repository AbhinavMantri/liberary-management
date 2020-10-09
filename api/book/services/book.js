const { models } = require("../../dbConnection");

module.exports = {
    addProduct: async function(data) {
       const book = await models.Book.create({ title: data.title, body: data.body });
       return book;
    },
    getBook: async function(id) {
        return models.Book.findOne({ where: { id }, attributes: ["id", "title", "body"] }); 
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
    addReview: async function(review, id, user) {
        const book = await this.getBook(id);
        // const existReview = await book.getReviews({ where: { '$book.user_id$': user.id } }); 
        const existReview = await models.BookReview.findOne({ where: { book_id: id, user_id: user.id }, attributes: ["book_id"] });
        // console.log(id);
        if(!existReview)
            return book.addReview(user, { through: { comment: review.comment, rating: review.rating } });
            //return models.BookReview.create({ comment: review.comment, rating: review.rating, book_id: id, user_id: user.id });
        else 
            return Promise.reject(new Error("You already reviewed this book"));
        // book.addReview(user, { through: { comment: review.comment, rating: review.rating }, update: false })
    } 
};
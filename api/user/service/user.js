const { models } = require("../../dbConnection");
const { jwtUtil } = require("../../utils");
const { BookService } = require("../../book/services");

module.exports = {
    getUser: async function(id) {
        return models.User.findOne({ where: { id }, attributes: ["id", "email", "role"] }); 
    },
    authenticate: async function(email, password) {
        const user = await models.User.findOne({ where: { email: email, password: password }, attributes: [ "id", "role" ] });

        if(user) {
           const accessToken = await jwtUtil.getToken(user); 
           return Promise.resolve({ accessToken, role: user.role });
        } else {
           return Promise.reject(new Error("Invalid Email/Password"));
        }
    },
    getFavourites: async function(data) {
        const user = await this.getUser(data.id);

        return user.getFavourites({attributes: ['id', 'title'], joinTableAttributes: []});
    },
    addFavourite: async function(data, book) {
        const user = await this.getUser(data.id);
        return user.addFavourite(book);
    },
    markReadHistory: async function(bookId, data) {
        const user = await this.getUser(data.id);
        // const book = await BookService.getBook(bookId);
        return user.addHistory(bookId);   
    },
    getReadHistory: async function(data) {
        const user = await this.getUser(data.id);
        
        return user.getHistories({attributes: ['id', 'title'], joinTableAttributes: []});
    }
};
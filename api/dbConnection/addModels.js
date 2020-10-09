const User = require("../user/models/user");
const Book = require("../book/models/books");
const BookReview = require("../book/models/review");


module.exports = sequelize => {    
    return {
        User: User(sequelize),
        Book: Book(sequelize),
        BookReview: BookReview(sequelize),
    };
};
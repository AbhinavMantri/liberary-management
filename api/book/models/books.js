const Sequelize = require("sequelize");

// const sequelize = require("../../dbConnection");
// const User = require("../../user/models/user");
// const BookReview = require("./review");

module.exports = function(sequelize) {
    return (
        sequelize.define('book', {
            title: { 
                type: Sequelize.STRING, allowNull: false,
                get: function()  {
                    return this.getDataValue('title');
                },
                set: function(title)  {
                    this.setDataValue('title', title);
                },
            },
            body: { 
                type: Sequelize.STRING(5000), allowNull: false, 
                get: function()  {
                    return this.getDataValue('body');
                },
                set: function(body)  {
                    this.setDataValue('body', body);
                },
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
        })
    );
}

// const Book = ;

// Book.sync();

// Book.belongsToMany(User, { through: BookReview });

// module.exports = Book;
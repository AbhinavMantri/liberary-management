const Sequelize = require("sequelize");
// const sequelize = require("../../dbConnection");

module.exports = function(sequelize) {
    return (
        sequelize.define('book_review', {
            comment: { 
                type: Sequelize.STRING, allowNull: false, 
                get: function()  {
                    return this.getDataValue('comment');
                },
                set: function(comment)  {
                    this.setDataValue('comment', comment);
                },
            },
            rating: { 
                type: Sequelize.ENUM("Poor", "Fair", "Good", "Very Good", "Excellent"), allowNull: false, 
                get: function()  {
                    return this.getDataValue('rating');
                },
                set: function(rating)  {
                    this.setDataValue('rating', rating);
                },
            }
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
        })
    );
}

// const BookReview = ;

// BookReview.sync();

// module.exports = BookReview;
module.exports = function(models) {
    // user
    models.User.belongsToMany(models.Book, { as: { singular: 'Favourite', plural: 'Favourites' }, through: "user_favourite" });
    models.User.belongsToMany(models.Book, { as: { singular: 'History', plural: 'Histories' }, through: "user_history" });

    // book
    models.Book.belongsToMany(models.User, {as: { singular: 'Review', plural: 'Reviews' }, through: models.BookReview });
};
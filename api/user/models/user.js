const Sequelize = require("sequelize");

// const sequelize = require("../../dbConnection");
// const Book = require("../../book/models/books");

module.exports = function(sequelize) {
    return (
        sequelize.define('user', {
            email: { 
                type: Sequelize.STRING, allowNull: false, unique: true, isEmail: true,
                get: function()  {
                    return this.getDataValue('email');
                },
                set: function(email)  {
                    this.setDataValue('email', email);
                },
            },
            password: { 
                type: Sequelize.STRING, allowNull: false, 
                get: function()  {
                    return this.getDataValue('password');
                },
                set: function(password)  {
                    this.setDataValue('password', password);
                },
            },
            role: {
             type: Sequelize.ENUM('ADMIN', 'USER'), defaultValue: 'USER',   
            },
        }, {
            timestamps: false,
            freezeTableName: true,
            underscored: true,
        })
    );
}

//User.hasMany(Book, { foriegnKey: 'favourites' });
// User.hasMany(Book, { foriegnKey: 'read' });

// module.exports = User;
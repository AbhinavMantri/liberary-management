const Sequelize = require("sequelize");

const addModels = require("./addModels");
const addRelations = require("./addRelations");

const sequelize = new Sequelize('library_management', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },

    define: { engine: 'InnoDB' }
});

const models = addModels(sequelize);

addRelations(models);

module.exports = {
    sequelize,
    models
};
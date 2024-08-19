const {Sequelize} = require('sequelize');


const sequelize = new Sequelize(
  process.env.BD_NAME, 
  process.env.BD_USER, 
  process.env.BD_PASSWORD, 
  {
    host: process.env.BD_HOST,
    schema: process.env.BD_SCHEMA,
    dialect: process.env.BD_DIALECT,
  }
);

module.exports = sequelize
var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'database', //database
  'root', // user
  'password', //password
  {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false
  }
);

module.exports = sequelize;
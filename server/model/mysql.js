var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'prova', //database
  'root', // user
  'Boboyrosso12', //password
  {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false
  }
);

module.exports = sequelize;
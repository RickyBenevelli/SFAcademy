var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'sfacademy', //database
  'root', // user
  'Boboyrosso12', //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
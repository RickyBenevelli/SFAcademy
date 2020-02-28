//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');

var tablename = 'users';

var User = sequelize.define(tablename, {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: Sequelize.STRING,
  password : Sequelize.INTEGER //da controllare
},
{
	 timestamps: false,
});


module.exports = User
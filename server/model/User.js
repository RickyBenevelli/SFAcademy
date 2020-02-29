//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');

var tablename = 'users';

module.exports = sequelize.define(tablename, {
  // id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: 2
  },
  password : {type: Sequelize.INTEGER, defaultValue: " "} //da controllare
},
{
	 timestamps: false,
});


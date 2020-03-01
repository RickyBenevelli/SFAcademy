//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');

var tablename = 'users';

module.exports = sequelize.define(tablename, {
  email: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    defaultValue: 2
  },
  password : {type: Sequelize.INTEGER} //da implementare il controllo sulla password
},
{
	 timestamps: false,
});


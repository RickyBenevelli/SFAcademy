//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var sequelize = require('./mysql');

const votation = 'votation';

module.exports = sequelize.define(votation, {
  id_votation: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    defaultValue: 0,
  },
  id_film: {
    type: Sequelize.STRING,
    allowNull: false},
  title_film: {
    type: Sequelize.STRING,
    allowNull: false,
},
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  vote: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 10,
    }
},
{
	 timestamps: false,
});
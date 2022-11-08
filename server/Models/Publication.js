const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Publication = sequelize.define("publications", {
    image: Sequelize.STRING,
    description: Sequelize.STRING,
    timestamp: Sequelize.STRING
  });


module.exports = {
  db: sequelize,
  Publication
};
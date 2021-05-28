const {Sequelize} = require('sequelize');
const {config: {database}} = require('./config/application')

const sequelize = new Sequelize(database.DB_DATABASE, database.DB_USERNAME, database.DB_PASSWORD, {
    host: database.DB_HOST,
    dialect: database.DB_CONNECTION
});

sequelize.authenticate()
    .then(r => console.log("connected"))
    .catch(e => console.log("error"))


sequelize.sync()
    .then(r => console.log("sync"))
    .catch(e => console.log("error"))

module.exports = {
    sequelize
}
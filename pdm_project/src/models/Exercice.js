const Sequelize = require('sequelize')
const database = require('../../db')

const Exercice = database.define('exercice', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    data: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

module.exports = Exercice
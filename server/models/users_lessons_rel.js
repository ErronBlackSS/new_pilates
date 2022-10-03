const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const users_lessons_rel = sequelize.define('users_lessons_rel', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    lesson_id: { type: DataTypes.INTEGER, allowNull: false }
})

module.exports = users_lessons_rel
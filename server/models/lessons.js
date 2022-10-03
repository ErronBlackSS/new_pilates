const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const lessons = sequelize.define('lessons', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    coach_id: { type: DataTypes.INTEGER, allowNull: false },
    lesson_type_id: { type: DataTypes.INTEGER, allowNull: false },
    capacity: { type: DataTypes.INTEGER, allowNull: false },
    occupied: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    start_time: { type: DataTypes.DATE, allowNull: false },
    end_time: { type: DataTypes.DATE, allowNull: false },
})

module.exports = lessons
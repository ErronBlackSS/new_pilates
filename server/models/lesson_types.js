const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const lesson_types = sequelize.define('lesson_types', {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING }
})


module.exports = lesson_types
  
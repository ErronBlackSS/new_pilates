const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const users = sequelize.define('users', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.INTEGER, defaultValue: "1" },
    remember_token: { type: DataTypes.STRING, defaultValue: null },
    lastname: { type: DataTypes.STRING, allowNull: false }
})

module.exports = users

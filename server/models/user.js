const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    phone: { type: DataTypes.STRING, unique: true, allowNull: false },
    email_verified_at: { type: DataTypes.DATE },
    password: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.INTEGER, defaultValue: "1" },
    info: { type: DataTypes.STRING, defaultValue: null },
    remember_token: { type: DataTypes.STRING, defaultValue: null },
    created_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    lastname: { type: DataTypes.STRING, allowNull: false }
})

module.exports = user

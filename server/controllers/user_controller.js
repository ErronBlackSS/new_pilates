const db = require('../db')

async function GetUsers (req, res) {                
    const users = await db.query('SELECT * from users')
    res.json(users[0])
}

async function CreateUser (req, res) {
    const { name, email, phone, password, role, remember_token, lastname } = req.body
    const newUser = await db.query('INSERT INTO users (name, email, phone, password, lastname) VALUES (?, ?, ?, ?, ?)', [name, email, phone, email_verified_at, password, role, info, remember_token, lastname])
    res.json(newUser)
}

module.exports = {
    GetUsers,
    CreateUser
}
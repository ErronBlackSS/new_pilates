const db = require('../db')

async function GetUsers (req, res) {                
    const users = await db.query('SELECT * from users')
    res.json(users.rows)
}

async function CreateUser (req, res) {
    const { name, email, phone, password, lastname } = req.body
    console.log(req.body)
    const newUser = await db.query('INSERT INTO users (name, email, phone, password, lastname) VALUES ($1, $2, $3, $4, $5)', [name, email, phone, password, lastname])
    res.json(newUser.rows[0])
}

module.exports = {
    GetUsers,
    CreateUser
}
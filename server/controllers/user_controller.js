const db = require('../db')
const helpers = require('../helpers/general')

async function Get (req, res) {                
    const users = await db.query('SELECT * from users')
    res.json(users.rows)
}

async function Create (req, res) {
    const { name, email, phone, password, lastname } = req.body
    console.log(req.body)
    const newUser = await db.query('INSERT INTO users (name, email, phone, password, lastname) VALUES ($1, $2, $3, $4, $5)', [name, email, phone, password, lastname])
    res.json(newUser.rows[0])
}

async function Update (req, res) {
    const query = helpers.parseUpdateData(req.body, 'users')
    const user = await db.query(query, [])
    res.json(user.rows[0])
}

async function Delete (req, res) {
    const { id } = req.body
    const user = await db.query('DELETE FROM users WHERE id = $1', [id])
    res.json(user.rows[0])
}

module.exports = {
    Get,
    Create,
    Update,
    Delete
}

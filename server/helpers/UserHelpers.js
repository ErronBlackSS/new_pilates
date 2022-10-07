const pool = require('../db')

async function findOne (params) {
    const user = await pool.query(`SELECT * from users WHERE ${params.field} = $1`, [params.value])
    return user.rows[0]
}

async function getAllUsers () {
    const users = await pool.query('SELECT * from users')
    return users.rows
}

async function create (user) {
    const newUser = await pool.query(`
        INSERT INTO users (name, email, phone, password, lastname, activation_link)) 
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [user.name, user.email, user.phone, user.password, user.lastname, user.activation_link]
    )
    return newUser.rows[0]
}

async function activate (userId) {
    const user = await pool.query(`
        UPDATE users 
        SET is_active = true
        WHERE id = $1`, 
        [userId]
    )
    return user.rows[0]
}

module.exports = {
    findOne,
    getAllUsers,
    create,
    activate
}
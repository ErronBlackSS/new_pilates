const pool = require('../db')

async function findOne (params) {
    return await pool.query(`SELECT * from users WHERE ${params.field} = $1`, [params.value])
}

async function Create (user) {
    const newUser = await pool.query(`
        INSERT INTO users (name, email, phone, password, lastname, activation_link)) 
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [user.name, user.email, user.phone, user.password, user.lastname, user.activation_link]
    )
    return newUser.rows[0]
}

async function Activate (userId) {
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
    Create
}
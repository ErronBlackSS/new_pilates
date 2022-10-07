const pool = require('../db')

async function findOne (params) {
    const user = await pool.query(`SELECT * from users WHERE ${params.field} = $1`, [params.value])
    return user.rows
}

async function getAllUsers () {
    const users = await pool.query('SELECT * from users')
    return users.rows
}

async function create (user) {
    const { name, email, password, lastname, phone, activation_link } = user
    const newUser = await pool.query(`
        INSERT INTO users (name, email, phone, password, lastname, activation_link)
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [name, email, phone, password, lastname, activation_link]
    )
    console.log(newUser, 'newUsernewUsernewUsernewUsernewUsernewUsernewUser')
    return newUser.rows
}

async function activate (userId) {
    const user = await pool.query(`
        UPDATE users 
        SET isactivated = true
        WHERE id = $1`, 
        [userId]
    )
    return user.rows
}

module.exports = {
    findOne,
    getAllUsers,
    create,
    activate
}
const pool = require('../db')

async function findOne (params) {
    const user = await pool.query(`SELECT * from users WHERE ${params.field} = $1`, [params.value])
    console.log(user.rows[0])
    return user.rows[0]
}

async function getAllUsers () {
    const users = await pool.query('SELECT * from users')
    return users.rows
}

async function create (user) {
    const { name, email, password, lastname, phone, activation_link } = user
    const newUser = await pool.query(`
        INSERT INTO users (name, email, phone, password, lastname, activation_link)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, name, email, phone, isActivated, lastname, activation_link`, 
        [name, email, phone, password, lastname, activation_link]
    )
    console.log(newUser, 'newUsernewUsernewUsernewUsernewUsernewUsernewUser')
    return user
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
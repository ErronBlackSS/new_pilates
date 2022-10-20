const helpers = require('../helpers/general')
const pool = require('../db')

async function findOne (params) {
    const user = await pool.query(`SELECT * from users WHERE ${params.field} = $1`, [params.value])
    return user.rows[0]
}

async function getAllUsers () {
    const users = await pool.query('SELECT * from users')
    return users.rows
}

async function update (user) {
  const query = helpers.parseUpdateData(user, 'users')
  const updatedUser = await pool.query(query + 'RETURNING *', [])
  console.log(updatedUser, 'updatedUser')
  return updatedUser.rows[0]
}

async function create (user) {
    const { name, email, hashPassword, lastname, phone, activation_link } = user
    const newUser = await pool.query(`
        INSERT INTO users (name, email, phone, password, lastname, activation_link)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, name, email, phone, is_activated, lastname, activation_link`, 
        [name, email, phone, hashPassword, lastname, activation_link]
    )
    return newUser.rows[0]
}

async function activate (userId) {
    const user = await pool.query(`
        UPDATE users 
        SET is_activated = true
        WHERE id = $1`, 
        [userId]
    )
    return { message: 'Пользователь активирован' }
}

async function getUserByResetToken (reset_link) {
    const user = await pool.query(`SELECT * from reset_tokens WHERE resetToken = $1`, [reset_link])
    return user.rows[0]
}

module.exports = {
    findOne,
    getAllUsers,
    create,
    update,
    getUserByResetToken,
    activate
}
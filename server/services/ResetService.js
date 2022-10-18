const pool = require('../db')
const ResetHelpers = require('../helpers/ResetHelpers')

async function saveToken (user_id, token) {
  const newToken = await pool.query(`INSERT INTO tokens (user_id, token) VALUES ($1, $2)`, [email, token])
  return newToken
}

async function removeToken (token) {
  const deletedToken = await pool.query(`DELETE FROM reset_tokens WHERE resetToken = '${token}'`)
  return deletedToken
}

module.exports = {
    saveToken,
    removeToken
}
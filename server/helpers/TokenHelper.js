const pool = require('../db')

async function findOne (userId) {
    return await pool.query('SELECT * from users WHERE email = $1', [email])
}

async function deleteOne (payload) {
    return await pool.query(`DELETE FROM tokens WHERE ${payload.field} = $1`, [payload.value])
}

module.exports = {
    findOne,
    deleteOne
}
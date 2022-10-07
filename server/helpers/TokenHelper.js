const pool = require('../db')

async function findOne (payload) {
    const token = await pool.query(`SELECT * from users WHERE ${payload.field} = $1`, [payload.value])
    return token.rows[0]
}

async function deleteOne (payload) {
    const deletedToken = await pool.query(`DELETE FROM tokens WHERE ${payload.field} = $1`, [payload.value])
    return deletedToken.rows[0]
}

async function create (userId, refreshToken) {
    const newToken = await pool.query(`
        INSERT INTO tokens (userId, refreshToken)) 
        VALUES ($1, $2)`, 
        [userId, refreshToken]
    )
    return newToken.rows[0]
}

module.exports = {
    findOne,
    deleteOne,
    create
}
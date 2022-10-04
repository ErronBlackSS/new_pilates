const db = require('../db')

async function GetUsers (req, res) {                
    const users = await db.query('SELECT * from users')
    res.json(users)
}

module.exports = {
    GetUsers,
}
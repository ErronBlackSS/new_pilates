const db = require('../db')

async function GetUsers (req, res) {                
    const users = await db.query('SELECT * from users')
    res.json(users[0])
}

module.exports = {
    GetUsers,
}
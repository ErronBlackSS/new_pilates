const db = require('../db')

async function GetUsers (res, req, body, next)  {
    const users = await db.query('SELECT * from users')
    res.send({status: 201, body: users.rows})
}

module.exports = {
    GetUsers
}
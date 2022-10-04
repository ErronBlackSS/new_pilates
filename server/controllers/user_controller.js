const db = require('../db')

class UserController {
    async GetUsers(req, res){                
        const users = await db.query('SELECT * from users')
        res.json(users)
    }
}



// async function GetUsers (res, req, body, next)  {
    
//     const users = await db.query(`SELECT * from users`)
//     res.send(users)
// }

module.exports = new UserController()
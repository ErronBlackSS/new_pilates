const Router = require('express')
const router = new Router()
const UserController = require('../controllers/user_controller')

router.get('/users', UserController.GetUsers)

module.exports = router

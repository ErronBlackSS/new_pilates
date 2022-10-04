const Router = require('express')
const router = new Router()
const UserController = require('../controllers/user_controller')

router.get('/users', UserController.GetUsers)
router.post('/usersss', UserController.CreateUser)
// router.patch('/users', UserController.UpdateUser)

module.exports = router

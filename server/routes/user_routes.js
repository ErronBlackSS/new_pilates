const Router = require('express')
const router = new Router()
const UserController = require('../controllers/user_controller')

router.get('/users', UserController.GetAll)
router.post('/users', UserController.Create)
router.patch('/users', UserController.Update)
router.delete('/users', UserController.Delete)

module.exports = router

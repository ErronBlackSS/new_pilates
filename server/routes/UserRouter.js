const Router = require('express')
const router = new Router()

const UserController = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

router.post('/login', UserController.login)
router.post('/registration', UserController.registration)
router.post('/logout', UserController.logout)
router.get('/refresh', UserController.refresh)
router.get('/activate/:link', UserController.activate)
router.get('/users', UserController.getUsers)
router.delete('/users', UserController.remove)
router.get('/reset/:link', UserController.reset)

module.exports = router

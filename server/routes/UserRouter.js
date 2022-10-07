const Router = require('express')
const router = new Router()

const UserController = require('../controllers/UserController');

router.post('/login', UserController.login)
router.post('/registration', UserController.registration)
router.post('/logout', UserController.logout)
// router.get('/auth', authMiddleware, authController.auth)
router.get('refresh', UserController.refresh)
router.get('activate/:link', UserController.activate)

module.exports = router

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
router.post('/reset', UserController.reset)
router.post('/reset/password', UserController.resetPassword)
router.get('/user/reset/:link', UserController.getUserByResetToken)
router.get('/reset/:link', UserController.activateReset)
router.patch('/users/set/coach', UserController.setCoachRole)
router.patch('/users/set/user', UserController.setUserRole)
router.patch('/users/set/admin', UserController.setAdminRole)
router.get('users/coaches', UserController.getCoaches)

module.exports = router

const Router = require('express')
const router = new Router()

router.post('/login', authController.login)
router.post('/registration', authController.registration)
router.get('/auth', authMiddleware, authController.check)

module.exports = router

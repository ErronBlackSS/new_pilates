const Router = require('express')
const router = new Router()
const LessonController = require('../controllers/lesson_controller')

router.get('/lessons', LessonController.GetAll)
router.post('/lessons', LessonController.Create)
router.patch('/lessons', LessonController.Update)
router.delete('/lessons', LessonController.Delete)
router.post('/lessons/book', LessonController.bookLesson)
router.get('/lessons/booked', LessonController.listBookedUsers)

module.exports = router

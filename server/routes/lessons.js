const Router = require('express')
const router = new Router()
const LessonController = require('../controllers/lessons')

router.get('/lessons', LessonController.GetAll)
router.post('/lessons', LessonController.Create)
router.patch('/lessons', LessonController.Update)
router.delete('/lessons', LessonController.Delete)
router.post('/lessons/book', LessonController.bookLesson)
router.delete('/lessons/book', LessonController.removeBooked)
router.get('/lessons/booked', LessonController.listBookedUsers)

module.exports = router

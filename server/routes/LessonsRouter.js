const Router = require('express')
const router = new Router()
const LessonController = require('../controllers/LessonsController')

router.get('/lessons', LessonController.getAll)
router.post('/lessons', LessonController.create)
router.patch('/lessons', LessonController.update)
router.delete('/lessons', LessonController.remove)
router.post('/lessons/book', LessonController.bookLesson)
router.delete('/lessons/book', LessonController.removeBooked)
router.get('/lessons/booked', LessonController.listBookedUsers)
router.get('/lessons/week', LessonController.getLessonsByDate)

module.exports = router

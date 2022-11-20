const Router = require('express')
const router = new Router()
const LessonController = require('../controllers/LessonsController')
const AdminLessonsService = require('../services/AdminLessonsService')
// TODO: Надо разделить получение занятий на lessons и shedule

router.get('/lessons', LessonController.getAll)
router.post('/lessons', LessonController.create)
router.patch('/lessons', LessonController.update)
router.delete('/lessons', LessonController.remove)
router.post('/lessons/book', LessonController.bookLesson)
router.delete('/lessons/book', LessonController.removeBooked)
router.get('/lessons/booked', LessonController.listBookedUsers)
router.get('/lessons/week', LessonController.getLessonsByDate)


router.get('/lessons/week/list', AdminLessonsService.getLessonsCurrentWeek)
router.get('/lessons/admin/planned', AdminLessonsService.getPlannedLessons)

module.exports = router

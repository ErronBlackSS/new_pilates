const Router = require('express')
const router = new Router()
const LessonController = require('../controllers/LessonsController')
const AdminLessonsService = require('../services/AdminLessonsService')
const UserLessonsService = require('../services/UserLessonsService')
// TODO: Надо разделить получение занятий на lessons и shedule

router.get('/lessons', LessonController.getAll)
router.post('/lessons', LessonController.create)
router.patch('/lessons', LessonController.update)
router.delete('/lessons', LessonController.remove)
router.post('/lessons/book', LessonController.bookLesson)
router.delete('/lessons/book', LessonController.removeBooked)
router.get('/lessons/booked', LessonController.listBookedUsers)
router.get('/lessons/week', LessonController.getLessonsByDate)

// Trainer

// User
router.get('/lessons/user', UserLessonsService.getLessonsForUserOnThisWeek)
router.get('/lessons/user/planned', UserLessonsService.getLessonsForUserForTheFuture)
router.get('/lessons/user/history', UserLessonsService.getLessonsForUserForThePast)

// Admin
router.get('/lessons/week/list', AdminLessonsService.getLessonsCurrentWeek)
router.get('/lessons/admin/planned', AdminLessonsService.getPlannedLessons)
router.get('/lessons/admin/history', AdminLessonsService.getHistoryLessons)

module.exports = router

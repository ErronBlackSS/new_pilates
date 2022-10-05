const Router = require('express')
const router = new Router()
const LessonTypesController = require('../controllers/users')

router.get('/lesson_types', LessonTypesController.GetAll)
router.post('/lesson_types', LessonTypesController.Create)
router.patch('/lesson_types', LessonTypesController.Update)
router.delete('/lesson_types', LessonTypesController.Delete)

module.exports = router
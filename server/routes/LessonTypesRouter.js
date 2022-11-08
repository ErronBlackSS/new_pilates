const Router = require('express')
const router = new Router()
const LessonTypesController = require('../controllers/LessonTypesController')

router.get('/lesson_types', LessonTypesController.getAll)
router.post('/lesson_types', LessonTypesController.create)
router.patch('/lesson_types', LessonTypesController.update)
router.delete('/lesson_types', LessonTypesController.remove)
router.post('/upload/', LessonTypesController.saveImage)

module.exports = router

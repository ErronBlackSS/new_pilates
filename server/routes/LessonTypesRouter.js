const Router = require('express')
const router = new Router()
const LessonTypesController = require('../controllers/LessonTypesController')

router.get('/lesson_types', LessonTypesController.getAll)
router.post('/lesson_types', LessonTypesController.create)
router.patch('/lesson_types/update', LessonTypesController.update)
router.delete('/lesson_types', LessonTypesController.remove)
router.post('/lesson_types/upload/file', LessonTypesController.saveImage)
router.post('/lesson_types/remove/file', LessonTypesController.removeFile)

module.exports = router

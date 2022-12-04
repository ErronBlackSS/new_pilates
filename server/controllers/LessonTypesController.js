const pool = require('../db')
const helpers = require('../helpers/general')
const LessonTypeHelper = require('../helpers/LessonTypeHelper')
const LessonTypesService = require('../services/LessonTypesService')
const LessonTypeDTO = require('../dtos/LessonTypeDTO')
const fs = require('fs')

async function create (req, res) {
  try {
    const { title, description, global_lesson_type, duration, image } = req.body
    const newLessonType = await pool.query(`
      INSERT INTO lesson_types (title, description, global_lesson_type, duration) VALUES ($1, $2, $3, $4) RETURNING *`, 
      [title, description, global_lesson_type, duration]
    )
    const image_url = null
    if (image) {
      image_url = LessonTypesService.saveImage(newLessonType.rows[0].id ,image)
    }
    const lessonType = new LessonTypeDTO({...newLessonType.rows[0], image_url})
    res.json(lessonType)
  }  catch (e) {
    console.log(e)
    //next(e)
  }
}

async function getAll (req, res) {
  try {
    const lessonTypes = await pool.query('SELECT * from lesson_types LEFT JOIN lesson_type_image ON lesson_types.id = lesson_type_image.lesson_type_id')
    const lessonTypesDTO = lessonTypes.rows.map(lessonType => new LessonTypeDTO(lessonType))
    res.json(lessonTypesDTO)
  } catch (e) {
    next(e)
  }
}

async function getAllByGroup (req, res) {
  try {
    const lessonTypes = await pool.query('SELECT id, title, description, duration, global_lesson_type, lesson_type_image.image_url from lesson_types LEFT JOIN lesson_type_image ON lesson_types.id = lesson_type_image.lesson_type_id ORDER by lesson_types.global_lesson_type desc')
    let arr = {}
    lessonTypes.rows.forEach((lessonType) => {
      if (!arr.hasOwnProperty(lessonType.global_lesson_type)) {
        arr[lessonType.global_lesson_type] = []
        arr[lessonType.global_lesson_type].push(lessonType)
      } else {
        arr[lessonType.global_lesson_type].push(lessonType)
      }
    })
       
    res.json(arr)
  } catch (e) {
    console.log(e)
  }
}

async function update (req, res) {
  try {
    const query = helpers.parseUpdateData(req.body, 'lesson_types')
    const lesson_types = await pool.query(query, [])
    res.json(lesson_types.rows[0])
  } catch (e) {
    next(e)
  }
}

async function remove (req, res) {
  try {
    const { id } = req.query
    console.log(id, 'DELETE LESSON TYPE')
    const lessonType = await pool.query(`
      DELETE FROM lesson_types 
      WHERE id = $1`, 
      [id]
    )
    res.json(lessonType.rows[0])
  } catch (e) {
    next(e)
  }
}

module.exports = {
    create,
    getAll,
    update,
    remove,
    getAllByGroup
}
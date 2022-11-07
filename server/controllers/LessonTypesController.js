const pool = require('../db')
const helpers = require('../helpers/general')
const LessonTypeDTO = require('../dtos/LessonTypeDTO')
const logger = require('../logger')

async function create (req, res) {
  try {
    const { title, description, global_lesson_type, duration } = req.body
    const newLessonType = await pool.query(`
      INSERT INTO lesson_types (title, description, global_lesson_type, duration) VALUES ($1, $2, $3, $4) RETURNING *`, 
      [title, description, global_lesson_type, duration]
    )
    lessonType = new LessonTypeDTO(newLessonType.rows[0])
    res.json({ lessonType })
  }  catch (e) {
    next(e)
  }
}

async function getAll (req, res) {
  try {
    const lessonTypes = await pool.query('SELECT * from lesson_types')
    const lessonTypesDTO = lessonTypes.rows.map(lessonType => new LessonTypeDTO(lessonType))
    res.json(lessonTypesDTO)
  } catch (e) {
    next(e)
  }
}

async function saveImage (req, res) {
  try {
    const { id } = req.body
    const file = req.files
    console.log(file)
    // console.log(image)
    const lessonType = await pool.query(`
      UPDATE lesson_types 
      SET lesson_image = $1 
      WHERE id = $2 RETURNING *`, 
      [file, id]
    )
    res.json(lessonType.rows[0])
  } catch (e) {
    console.log(e)
    //next(e)
  }
}

async function update (req, res) {
  try {
    const query = helpers.parseUpdateData(req.body, 'lesson_types')
    const lessonType = await pool.query(query, [])
    res.json(lessonType.rows[0])
  } catch (e) {
    next(e)
  }
}

async function remove (req, res) {
  try {
    const { id } = req.body
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
    saveImage
}
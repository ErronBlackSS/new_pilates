const pool = require('../db')
const helpers = require('../helpers/general')
const LessonTypeDTO = require('../dtos/LessonTypeDTO')

async function create (req, res) {
  try {
    const { title, description, global_lesson_type, duration } = req.body
    console.log(req.body)
    const newLessonType = await pool.query(`
      INSERT INTO lesson_types (title, description, global_lesson_type, duration) VALUES ($1, $2, $3, $4)`, 
      [title, description, global_lesson_type, duration]
    )
    res.json(newLessonType.rows[0])
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
    remove
}
const pool = require('../db')
const helpers = require('../helpers/general')

async function create (req, res) {
  try {
    const { name, description } = req.body
    const newLessonType = await pool.query(`
      INSERT INTO lesson_types (name, description) VALUES ($1, $2)`, 
      [name, description]
    )
    res.json(newLessonType.rows[0])
  }  catch (e) {
    next(e)
  }
}

async function getAll (req, res) {
  try {
    const lessonTypes = await pool.query('SELECT * from lesson_types')
    res.json(lessonTypes.rows)
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
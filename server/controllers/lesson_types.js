const pool = require('../db')
const helpers = require('../helpers/general')

async function Create (req, res) {
    const { name, description } = req.body
    const newLessonType = await pool.query(`
        INSERT INTO lesson_types (name, description) VALUES ($1, $2)`, 
        [name, description]
    )
    res.json(newLessonType.rows[0])
}

async function GetAll (req, res) {
    const lessonTypes = await pool.query('SELECT * from lesson_types')
    res.json(lessonTypes.rows)
}

async function Update (req, res) {
    const query = helpers.parseUpdateData(req.body, 'lesson_types')
    const lessonType = await pool.query(query, [])
    res.json(lessonType.rows[0])
}

async function Delete (req, res) {
    const { id } = req.body
    const lessonType = await pool.query(`
        DELETE FROM lesson_types 
        WHERE id = $1`, 
        [id]
    )
    res.json(lessonType.rows[0])
}

module.exports = {
    Create,
    GetAll,
    Update,
    Delete
}
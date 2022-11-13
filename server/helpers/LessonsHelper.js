const pool = require('../db')

async function getLessonById (id) {
    const lessons = await pool.query(`
      SELECT lessons.id, users.name as trainer, lesson_types.title, lessons.capacity,
        lessons.occupied, lessons.start_time, lessons.end_time, lessons.date
      from lessons
      JOIN users ON lessons.coach_id = users.id
      JOIN lesson_types ON lessons.lesson_type_id = lesson_types.id
      where lessons.id = $1`, [id])
    return lessons.rows[0]
}

module.exports = {
  getLessonById
}
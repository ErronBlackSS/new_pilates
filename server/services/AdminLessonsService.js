const pool = require('../db')

async function getLessonsCurrentWeek(req, res) {
  try {
    const { start, end } = req.query.week
    const lessons = await pool.query(`
    SELECT lessons.coach_id, users."name", users."lastname", lessons.id as lesson_id, lesson_types.title, lesson_types.description, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity
    FROM lessons 
    JOIN lesson_types ON lesson_types.id = lessons.lesson_type_id
    JOIN users ON users.id = lessons.coach_id
    WHERE lessons.date BETWEEN $1 and $2`,
    [start, end])
    
    res.json(lessons.rows)
  }
  catch (e) {
    console.log(e)
  }
}

async function getPlannedLessons(req, res) {
  try {    
    const lessons = await pool.query(`
      select users."name", lessons.id as lesson_id, users.id as trainer_id, lesson_types.description as description, lesson_types.title, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity, lessons.occupied
      from lessons
      left join users on lessons.coach_id = users.id
      left join lesson_types on lessons.lesson_type_id = lesson_types.id
      where lessons.date > now()`
    )

    res.json(lessons.rows)
  }
  catch (e) {
    next(e)
  }
}

async function getHistoryLessons(req, res) {
  try {    
    const lessons = await pool.query(`
      select users."name", lessons.id as lesson_id, users.id as trainer_id, lesson_types.description as description, lesson_types.title, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity, lessons.occupied
      from lessons
      left join users on lessons.coach_id = users.id
      left join lesson_types on lessons.lesson_type_id = lesson_types.id
      where lessons.date > now()`
    )

    res.json(lessons.rows)
  }
  catch (e) {
    next(e)
  }
}

async function getLessonsByDate(req, res) {
  try {
    const { start, end } = req.query.week
    const lessons = await pool.query(`
      select users."name", lessons.id as lesson_id, users.id as trainer_id, lesson_types.description as description, lesson_types.title, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity, lessons.occupied
      from lessons
      left join users on lessons.coach_id = users.id
      left join lesson_types on lessons.lesson_type_id = lesson_types.id
      where lessons.date BETWEEN $1 and $2`,
    [start, end])

    res.json(lessons.rows)
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  getLessonsCurrentWeek,
  getLessonsByDate,
  getPlannedLessons,
  getHistoryLessons
}
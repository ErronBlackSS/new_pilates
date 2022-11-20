const e = require('express')
const pool = require('../db')
const helpers = require('../helpers/general')
const LessonHelper = require('../helpers/LessonsHelper')

async function create (req, res) {
  try {
    const { coach_id, lesson_type_id, capacity, date, start_time, end_time } = req.body
    const newLesson = await pool.query(`
        INSERT INTO lessons (coach_id, lesson_type_id, capacity, date, start_time, end_time) 
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`, 
        [coach_id, lesson_type_id, capacity, date, start_time, end_time])

    const id = newLesson.rows[0].id
    const lesson = await LessonHelper.getLessonById(id)
    res.json(lesson)
  } catch (e) {
    next(e)
  }
}

// Пока хз нужна ли она
async function getAll (req, res) {
  try {
    const lessons = await pool.query('SELECT lessons.id, users.name as trainer, lesson_types.title, lessons.capacity, lessons.occupied, lessons.start_time, lessons.end_time, lessons.date from lessons JOIN users ON lessons.coach_id = users.id JOIN lesson_types ON lessons.lesson_type_id = lesson_types.id')
    res.json(lessons.rows)
  } catch (e) {
    next(e)
  }
}

async function update (req, res) {
  try {
    const query = helpers.parseUpdateData(req.body, 'lessons')
    const lesson = await pool.query(query, [])
    res.json(lesson.rows[0])
  } catch (e) {
    next(e)
  }
}

async function remove (req, res) {
  try {
    const { id } = req.body
    const lesson = await pool.query('DELETE FROM lessons WHERE id = $1', [id])
    res.json(lesson.rows[0])
  } catch (e) {
    next(e)
  }
}

async function bookLesson (req, res) {
  try {
    const { user_id, lesson_id } = req.body
    const checkUserAlreadyBooked = await pool.query(`SELECT * FROM users_lessons_rel WHERE user_id = $1 AND lesson_id = $2`, [user_id, lesson_id])
    if (checkUserAlreadyBooked.rows.length > 0) {
      res.status(202).json({ message: 'Вы уже записаны на это Занятие' })
      return
    }
    const lesson = await pool.query(`
      SELECT * FROM lessons 
      WHERE id = $1`, 
      [lesson_id]
    )
    if (lesson.rows[0].capacity !== 0) {
      await pool.query(`
        INSERT INTO users_lessons_rel (user_id, lesson_id)
        VALUES ($1, $2)`,
        [user_id, lesson_id]
      )
      const newBooking = await pool.query(`
        UPDATE lessons
        SET capacity = capacity - 1
        WHERE id = $1 RETURNING *`,
        [lesson_id]
      )
      res.json(newBooking.rows[0].capacity)
    } else {
      res.json({ message: 'Lesson is full' })
    }
  } catch (e) {
    next(e)
  }
}

async function removeBooked (req, res) {
  try {
    const { lesson_id, user_id } = req.body
    const lesson = await pool.query(`
      SELECT * FROM lessons
      WHERE id = $1`,
      [lesson_id]
    )
    const newCapacity = await pool.query(`
      UPDATE lessons
      SET capacity = capacity + 1
      WHERE id = $1`,
      [lesson_id]
    )
    const booking = await pool.query(`
      DELETE FROM users_lessons_rel
      WHERE lesson_id = $1 AND user_id = $2`,
      [lesson_id, user_id]
    )
    res.json(booking.rows[0])
  } catch (e) {
    next(e)
  }
}

async function listBookedUsers (req, res) {
  try {
    const { lesson_id } = req.body
    const lessons = await pool.query(`
      SELECT * FROM lessons 
      INNER JOIN users_lessons_rel ON lessons.id = users_lessons_rel.lesson_id 
      WHERE users_lessons_rel.user_id = $1`, 
      [lesson_id])
    res.json(lessons.rows)
  } catch (e) {
    next(e)
  }
}

async function getLessonsByDate(req, res) {
  try {
    const { start, end } = req.query.week
    const lessons = await pool.query(`
    select users."name", lessons.id, users.id as trainer_id, lesson_types.description as description, lesson_types.title, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity, lessons.occupied
    from lessons
    left join users on lessons.coach_id = users.id
    left join lesson_types on lessons.lesson_type_id = lesson_types.id
    where lessons.date BETWEEN $1 and $2`,
    [start, end])

    const { trainings, weekDays } = LessonHelper.getFormattedLessons(lessons, start)
    res.json({ trainings, weekDays })
  } catch (e) {
    console.log(e)
  }
}

async function getLessonsForUserOnThisWeek(req, res) {
  try {    
    const { user_id } = req.body
    const { start, end } = req.query.week
    const lessons = await pool.query(`
      SELECT lessons.coach_id, users."name", users."lastname", lessons.id as lesson_id, lesson_types.title, lesson_types.description, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity
      FROM users_lessons_rel 
      JOIN lessons ON lessons.id = users_lessons_rel.lesson_id
      JOIN lesson_types ON lesson_types.id = lessons.lesson_type_id
      JOIN users ON users.id = lessons.coach_id
      WHERE users_lessons_rel.user_id = $1 and lessons.date BETWEEN $2 and $3`,
      [user_id, start, end])
    
    const { trainings, weekDays } = LessonHelper.getFormattedLessons(lessons, start)
    res.json({ trainings, weekDays })
  }
  catch (e) {
    next(e)
  }
}

async function getLessonsForUserForTheFuture(req, res) {
  try {    
    const { user_id } = req.body
    const lessons = await pool.query(`
      SELECT lessons.coach_id, users."name", users."lastname", lessons.id as lesson_id, lesson_types.title, lesson_types.description, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity
      FROM users_lessons_rel 
      JOIN lessons ON lessons.id = users_lessons_rel.lesson_id
      JOIN lesson_types ON lesson_types.id = lessons.lesson_type_id
      JOIN users ON users.id = lessons.coach_id
      WHERE users_lessons_rel.user_id = $1 and lessons.date < now()`,
      [user_id])

    res.json(lessons.rows)
  }
  catch (e) {
    next(e)
  }
}

async function getLessonsForUserForThePast(req, res) {
  try {    
    const { user_id } = req.body
    const lessons = await pool.query(`
      SELECT lessons.coach_id, users."name", users."lastname", lessons.id as lesson_id, lesson_types.title, lesson_types.description, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity
      FROM users_lessons_rel 
      JOIN lessons ON lessons.id = users_lessons_rel.lesson_id
      JOIN lesson_types ON lesson_types.id = lessons.lesson_type_id
      JOIN users ON users.id = lessons.coach_id
      WHERE users_lessons_rel.user_id = $1 and lessons.date < now()`,
      [user_id])
    
    res.json(lessons.rows)

  }
  catch (e) {
    next(e)
  }
}

module.exports = {
    create,
    getAll,
    update,
    remove,
    listBookedUsers,
    bookLesson,
    removeBooked,
    getLessonsForUserOnThisWeek,
    getLessonsForUserForTheFuture,
    getLessonsForUserForThePast,
    getLessonsByDate
}

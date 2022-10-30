const pool = require('../db')
const helpers = require('../helpers/general')

async function create (req, res) {
  try {
    const { coach_id, lesson_type_id, capacity, date, start_time, end_time } = req.body
    const newLesson = await pool.query(`
        INSERT INTO lessons (coach_id, lesson_type_id, capacity, date, start_time, end_time) 
        VALUES ($1, $2, $3, $4, $5, $6)`, 
        [coach_id, lesson_type_id, capacity, date, start_time, end_time])
    res.json(newLesson.rows[0])
  } catch (e) {
    next(e)
  }
}

// Пока хз нужна ли она
async function getAll (req, res) {
  try {
    const lessons = await pool.query('SELECT * from lessons')
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
    const lesson = await pool.query(`
      SELECT * FROM lessons 
      WHERE id = $1`, 
      [lesson_id]
    )
    if (availiableToBook(lesson.rows[0].capacity, lesson.rows[0].occupied)) {
      const newBooking = await pool.query(`
        INSERT INTO users_lessons_rel (user_id, lesson_id)
        VALUES ($1, $2)`,
        [user_id, lesson_id]
      )
      await pool.query(`
        UPDATE lessons
        SET capacity = capacity - 1
        WHERE id = $1`,
        [lesson_id]
      )
      res.json(newBooking.rows[0])
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
    const start_time = req.body
    const end_time = req.body
    const lessons = await pool.query(`
    select users."name", users.id, lesson_types.title, lessons.date, lessons.start_time, lessons.end_time, lessons.capacity, lessons.occupied
    from lessons
    left join users on lessons.coach_id = users.id
    left join lesson_types on lessons.lesson_type_id = lesson_types.id
    where lessons.date BETWEEN $1 and $2`,
    [start_time, end_time])
    res.json(lessons.rows)
  } catch (e) {
    next(e)
  }
}


function availiableToBook (capacity, occupied) {
  try {
    return capacity - occupied > 0
  } catch (e) {
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
    removeBooked
}

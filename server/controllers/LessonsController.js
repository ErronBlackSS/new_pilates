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

    let formattedLessons = {}
    lessons.rows.forEach(lesson => {
      const lessonStartTime = lesson.start_time.substr(0, 5)
      const lessonEndTime = lesson.end_time.substr(0, 5)
      const lessonFullTime = lessonStartTime + " - " + lessonEndTime
      const lessonDate = lesson.date
      const formattedDate = lessonDate.getFullYear() + '-' + lessonDate.getUTCDate() + '-' + (+lessonDate.getMonth()+1)

      formattedLessons[lessonFullTime] = {
        time: lessonFullTime,
        lesson: {
          weekDay: lessonDate.getDay(),
          trainer_name: lesson.name,
          id: lesson.id,
          trainer_id: lesson.trainer_id,
          title: lesson.title,
          date: formattedDate,
          start_time: lessonStartTime,
          end_time: lessonEndTime,
          capacity: lesson.capacity,
          occupied: lesson.occupied,
          description: lesson.description,
          show: true
       }
      }
    })

    const trainings = []

    for(const key in formattedLessons) {
      console.log(formattedLessons[key], 'value')
      const lessonRow = {
        time: formattedLessons[key].time,
        lessons: {
          'Понедельник': formattedLessons[key].lesson.weekDay === 2 ? formattedLessons[key].lesson : null,
          'Вторник': formattedLessons[key].lesson.weekDay === 3 ? formattedLessons[key].lesson : null,
          'Среда': formattedLessons[key].lesson.weekDay === 4 ? formattedLessons[key].lesson : null,
          'Четверг': formattedLessons[key].lesson.weekDay === 5 ? formattedLessons[key].lesson : null,
          'Пятница': formattedLessons[key].lesson.weekDay === 6 ? formattedLessons[key].lesson : null,
          'Суббота': formattedLessons[key].lesson.weekDay === 7 ? formattedLessons[key].lesson : null,
          'Воскресенье': formattedLessons[key].lesson.weekDay === 1 ? formattedLessons[key].lesson : null,
        }
      }
      trainings.push(lessonRow)
    }
    const weekDays = getWeekDaysWithDate()
    res.json({ trainings, weekDays })
  } catch (e) {
    console.log(e)
  }
}

function getWeekDaysWithDate() {
  const today = new Date()
  const day = today.getDay()
  const weekDaysShedule = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
  ]
  const diff = today.getDate() - day + (day === 0 ? -6:1)
  for (let i = 0; i < 7; i++) {
    const day = new Date(today.setDate(diff + i))
    weekDaysShedule[i] += ' ' + day.getDate() + '.' + (+day.getMonth()+1)
  }
  console.log(weekDaysShedule, 'weekDaysShedule')
  return weekDaysShedule
}

function availiableToBook (capacity, occupied) {
  try {
    return capacity - occupied > 0
  } catch (e) {
    next(e)
  }
}

const weekDays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота'
]

module.exports = {
    create,
    getAll,
    update,
    remove,
    listBookedUsers,
    bookLesson,
    removeBooked,
    getLessonsByDate
}

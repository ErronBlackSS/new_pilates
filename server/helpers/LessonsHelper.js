const pool = require('../db')

async function getLessonById (id) {
    const lessons = await pool.query(`
      SELECT lessons.id as lesson_id, users.name as trainer, lesson_types.title, lessons.capacity,
        lessons.occupied, lessons.start_time, lessons.end_time, lessons.date
      from lessons
      JOIN users ON lessons.coach_id = users.id
      JOIN lesson_types ON lessons.lesson_type_id = lesson_types.id
      where lessons.id = $1`, [id])
    return lessons.rows[0]
}

function getFormattedLessons(lessons, start) {
  let formattedLessons = {}
  lessons.rows.forEach(lesson => {
    const lessonStartTime = lesson.start_time.substr(0, 5)
    const lessonEndTime = lesson.end_time.substr(0, 5)
    const lessonFullTime = lessonStartTime + " - " + lessonEndTime
    const lessonDate = lesson.date
    const formattedDate = lessonDate.getFullYear() + '-' + lessonDate.getUTCDate() + '-' + (+lessonDate.getMonth())

    if (formattedLessons[lessonFullTime]) {
      formattedLessons[lessonFullTime].lessons.push({
        weekDay: lessonDate.getDay(),
        trainer_name: lesson.name,
        id: lesson.lesson_id,
        trainer_id: lesson.trainer_id,
        title: lesson.title,
        date: formattedDate,
        start_time: lessonStartTime,
        end_time: lessonEndTime,
        capacity: lesson.capacity,
        occupied: lesson.occupied,
        description: lesson.description,
        show: true
      })
    } else {
      formattedLessons[lessonFullTime] = {
        time: lessonFullTime,
        lessons: [{
          weekDay: lessonDate.getDay(),
          trainer_name: lesson.name,
          id: lesson.lesson_id,
          trainer_id: lesson.trainer_id,
          title: lesson.title,
          date: formattedDate,
          start_time: lessonStartTime,
          end_time: lessonEndTime,
          capacity: lesson.capacity,
          occupied: lesson.occupied,
          description: lesson.description,
          show: true
        }]
      }
    }
  })
  const trainings = []

  for(const key in formattedLessons) {
    const lessonRow = {
      time: formattedLessons[key].time,
      lessons: {
        'Понедельник': findFormattedLesson(formattedLessons, key, 1),
        'Вторник': findFormattedLesson(formattedLessons, key, 2),
        'Среда': findFormattedLesson(formattedLessons, key, 3),
        'Четверг': findFormattedLesson(formattedLessons, key, 4),
        'Пятница': findFormattedLesson(formattedLessons, key, 5),
        'Суббота': findFormattedLesson(formattedLessons, key, 6),
        'Воскресенье': findFormattedLesson(formattedLessons, key, 0),
      }
    }
    trainings.push(lessonRow)
  }
  const weekDays = getWeekDaysWithDate(start)
  return {trainings, weekDays}
}

function findFormattedLesson(formattedLessons, key, weekDay) {
  const formattedLesson = formattedLessons[key].lessons.find((lesson) => lesson.weekDay === weekDay)

  if(!formattedLesson) {
    return null
  }
  return formattedLesson
}

function getWeekDaysWithDate(start) {
  const today = new Date(start)
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

  return weekDaysShedule
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
  getLessonById,
  getFormattedLessons
}
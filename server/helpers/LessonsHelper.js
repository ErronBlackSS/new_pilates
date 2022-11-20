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

function getFormattedLessons(lessons, start) {
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
      const lessonRow = {
        time: formattedLessons[key].time,
        lessons: {
          'Понедельник': formattedLessons[key].lesson.weekDay === 2 ? formattedLessons[key].lesson : null,
          'Вторник': formattedLessons[key].lesson.weekDay === 3 ? formattedLessons[key].lesson : null,
          'Среда': formattedLessons[key].lesson.weekDay === 4 ? formattedLessons[key].lesson : null,
          'Четверг': formattedLessons[key].lesson.weekDay === 5 ? formattedLessons[key].lesson : null,
          'Пятница': formattedLessons[key].lesson.weekDay === 6 ? formattedLessons[key].lesson : null,
          'Суббота': formattedLessons[key].lesson.weekDay === 0 ? formattedLessons[key].lesson : null,
          'Воскресенье': formattedLessons[key].lesson.weekDay === 1 ? formattedLessons[key].lesson : null,
        }
      }
      trainings.push(lessonRow)
    }
    const weekDays = getWeekDaysWithDate(start)
    return {trainings, weekDays}
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

module.exports = {
  getLessonById,
  getFormattedLessons
}
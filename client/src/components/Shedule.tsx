import { useEffect, useState } from 'react'
import { getCurrentWeek } from '../Utils/functions'
import LessonService from '../Services/LessonService'
import LessonsAdmin from '../Pages/LessonsAdmin'

interface ILesson {
  capacity: number
  date: string
  end_time: string
  id: number
  occupied: number
  start_time: string
  title: string
  trainer_id: number
  trainer_name: string
  weekDay: number
}

const Shedule = () => {
  
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek())
  const [lessons, setLessons] = useState([])
  const [weekDays, setWeekDays] = useState([])

  useEffect(() => {
    const getLessonsByWeek = async () => {
      const resp = await LessonService.getByWeek(currentWeek)
      const trainings = resp.data.trainings.sort(function(a,b){
        if (a.time > b.time)
          return 1
        if (a.time < b.time)
          return -1
        return 0
      })
      const weekDays = resp.data.weekDays
      setLessons(trainings)
      setWeekDays(['Время', ...weekDays])
    }

    getLessonsByWeek()
  }, [])

  return (
    <table
      className="bg-[#FFF] p-[25px] gap-[15px] overflow-y-scroll"
    >
      <thead>
        <tr>
          {weekDays && weekDays.map((day, index) => (
            <th className="py-3 px-6" key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {lessons && lessons.map((day, index) => (
          <tr key={index}>
            <th className="py-3 px-6">
              <div>
                <p>{day.time}</p>
              </div>
            </th>
            {day.lessons && Object.values(day.lessons).map((lesson: ILesson, index) => (
              <th className="py-3 px-6" key={index}>
                {
                  lesson && 
                  <div>
                    <p>{lesson.title}</p>
                  </div>
                }
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Shedule
import { useContext, useEffect, useState } from 'react'
import { getCurrentWeek } from '../Utils/functions'
import LessonService from '../Services/LessonService'
import TopButtons from '../Components/Shedule/TopButtons'
import Modal from './Common/Modal'
import LessonDetail from './Shedule/LessonDetail'
import { Context } from '..'
import { createContext } from 'react'

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
  description: string
  weekDay: number
}

const Shedule = () => {
  
  const { user } = useContext(Context)
  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek())
  const [lessons, setLessons] = useState([])
  const [weekDays, setWeekDays] = useState([])
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedLesson, setSelectedLesson] = useState<ILesson>(null)

  const selectLesson = (lesson) => {
    setSelectedLesson(lesson)
    setShowDetailModal(true)
  }

  const onBook = async (lessonId) => {
    const resp = await LessonService.book(lessonId, user.user.id)
    if (resp.status === 202) {
      alert(resp.data.message)
      setShowDetailModal(false)
      return
    }
    alert('Вы успешно записались на занятие')
    setShowDetailModal(false)
  }

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
      console.log(trainings)
      setLessons(trainings)
      setWeekDays(['Время', ...weekDays])
    }

    getLessonsByWeek()
  }, [])

  return (
    <>
      {
        showDetailModal &&
          <Modal
            title={selectedLesson.title}
            showModal={showDetailModal}
            setShowModal={setShowDetailModal}
            width={'300px'}
            height={'400px'}
          >
            <LessonDetail
              id={selectedLesson.id}
              time={selectedLesson.start_time + ' - ' + selectedLesson.end_time}
              description={selectedLesson.description}
              trainer={selectedLesson.trainer_name}
              freePlaces={selectedLesson.capacity}
              book={onBook}
            />
          </Modal>
      }
      <div className="flex flex-row">
        <div>
          <span className="text-[44px] leading-[56px]">Расписание</span>
        </div>
        <TopButtons />
      </div>
      <table
        className="bg-[#FFF] p-[25px] gap-[15px] border-separate overflow-y-scroll"
      >
        <thead>
          <tr>
            {weekDays && weekDays.map((day, index) => (
              <th className="w-[155px] h-[40]" key={index}><div><p>{day}</p></div></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {lessons && lessons.map((day, index) => (
            <tr key={index}>
              <th className="border border-[#F2F2F3] w-[155px] h-[105px]">
                <div>
                  <p>{day.time}</p>
                </div>
              </th>
              {day.lessons && Object.values(day.lessons).map((lesson: ILesson, index) => (
                <th className="border border-[#F2F2F3] w-[155px] h-[105px]" key={index}>
                  {
                    lesson && 
                  <div className="flex flex-col justify-center items-center">
                    <p className="text-bordo">{lesson.title}</p>
                    <span className="text-[12px]">Осталось мест: {lesson.capacity}</span>
                    <button
                      onClick={() => { selectLesson(lesson) }}
                      disabled={lesson.capacity - lesson.occupied === 0}
                      className="w-[109px] py-[4px] mt-[15px] text-[14px] text-[#FFF] font-[400] bg-bordo rounded-[6px]"
                    >
                      Подроднее
                    </button>
                  </div>
                  }
                </th>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Shedule
import { useContext, useEffect, useState } from 'react'
import { getCurrentWeek, getNextWeek } from '../Utils/functions'
import TopButtons from '../Components/Shedule/TopButtons'
import Modal from './Common/Modal'
import LessonDetail from './Shedule/LessonDetail'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../Store/LessonsStore'
import SheduleCell from '../Components/Shedule/SheduleCell'


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
  show: boolean
}

const Shedule = () => {
  
  const { user } = useContext(Context)

  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek())
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedLesson, setSelectedLesson] = useState<ILesson>(null)

  const selectLesson = (lesson) => {
    setSelectedLesson(lesson)
    setShowDetailModal(true)
  }

  const onBook = (lessonId) => {
    if(!user.isAuth) {
      alert('Для записи необходимо авторизоваться')
      setShowDetailModal(false)
      return
    }
    LessonsStore.bookLesson(lessonId, user.user.id)
    setShowDetailModal(false)
  }

  useEffect(() => {
    LessonsStore.getLessonsByWeek(currentWeek)
  }, [currentWeek])

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
        <TopButtons
          onPrev={() => setCurrentWeek(getCurrentWeek())}
          onNext={() => setCurrentWeek(getNextWeek())}
        />
      </div>
      <table
        className="bg-[#FFF] p-[25px] gap-[15px] border-separate overflow-y-scroll"
      >
        <thead>
          <tr>
            <th className="w-[155px] h-[40]"><div><p>Время</p></div></th>
            {LessonsStore.weekDays && LessonsStore.weekDays.map((day, index) => (
              <th className="w-[155px] h-[40]" key={index}><div><p>{day}</p></div></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {LessonsStore.trainings && LessonsStore.trainings.map((day, index) => (
            <tr key={index}>
              <th className="border border-[#F2F2F3] w-[155px] h-[105px]">
                <div>
                  <p>{day.time}</p>
                </div>
              </th>
              {day.lessons && Object.values(day.lessons).map((lesson: ILesson, index) => (      
                <SheduleCell
                  key={index}
                  lesson={lesson}
                  selectLesson={selectLesson}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default observer(Shedule)
import { useContext, useEffect, useState } from 'react'
import { getCurrentWeek, getNextWeek } from '../Utils/functions'
import TopButtons from './Shedule/TopButtons'
import Modal from './Common/Modal'
import LessonDetail from './Shedule/LessonDetail'
import { Context } from '..'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../Store/LessonsStore'
import SheduleTable from './Shedule/SheduleTable'
import { Lesson } from '../Types/LessonsTypes/LessonsTypes'

const Shedule = () => {
  
  const { user } = useContext(Context)

  const [currentWeek, setCurrentWeek] = useState(getCurrentWeek())
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(null)

  const selectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson)
    setShowDetailModal(true)
  }

  const onBook = (lessonId: number) => {
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
            setShowModal={setShowDetailModal}
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
      <div className="flex flex-row mt-[100px] mb-[70px] mobile-below:mt-[50px]">
        <div>
          <span className="text-[44px] leading-[56px] mobile-below:text-[24px]">Расписание</span>
        </div>
        <TopButtons
          onPrev={() => setCurrentWeek(getCurrentWeek())}
          onNext={() => setCurrentWeek(getNextWeek())}
        />
      </div>
      <SheduleTable
        selectLesson={selectLesson}
      />
    </>
  )
}

export default observer(Shedule)
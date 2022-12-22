import { useEffect, useState, useContext } from 'react'
import Modal from '../Components/Common/Modal'
import AddLessonForm from '../Components/Forms/AddLessonForm'
import UserService from '../Services/UserService'
import LessonTypesService from '../Services/LessonTypesService'
import LessonsList from '../Components/Lessons/LessonsList'
import Button from '../Components/Common/Button'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../Store/LessonsStore'
import { ButtonColors } from '../Utils/constance'
import FilterButtons from '../Components/Lessons/FilterButtons'
import { Context } from '../index'
import { ROLES } from '../Utils/constance'
const Lessons = () => {

  const { user } = useContext(Context)
  
  const [showAddModal, setShowAddModal] = useState(false)
  const [trainers, setTrainers] = useState([])
  const [lessonTypes, setLessonTypes] = useState([])

  const getAndSetTrainers = async () => {
    const resp = await UserService.getTrainers()
    const trainers = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.name
      }
    })
    setTrainers(trainers)
  }
  
  const getAndSetLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    const lessonTypes = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.title
      }
    })
    setLessonTypes(lessonTypes)
  }

  const onAddLesson = (lesson) => {
    setShowAddModal(false)
    LessonsStore.addLesson(lesson)
  }

  useEffect(() => {
    switch (user.user.role) {
    case ROLES.USER:
      LessonsStore.getUserPlannedLessons(user.user.id)
      break
    case ROLES.COACH:
      LessonsStore.getUserPlannedLessons(user.user.id)
      break
    case ROLES.ADMIN:
      getAndSetTrainers()
      getAndSetLessonTypes()
      LessonsStore.getLessonsCurrentWeek()
      break
    default:
      LessonsStore.getUserPlannedLessons(user.user.id)
    }
  }, [])

  return (
    <div className="pt-[50px] pr-[60px]">
      <div className="flex flex-row justify-between">
        <div className="flex gap-[40px]">
          <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
          Список занятий
          </span>
          <div className="flex flex-row">
            <FilterButtons role={user.user.role} userId={user.user.id} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end mt-[36px]">
        {user.user.role === ROLES.ADMIN && <Button
          handler={() => setShowAddModal(true)}
          color={ButtonColors.white}
          className="py-[2px] px-[14px]"
        >
          Добавить занятие
        </Button>}
      </div>
      {
        showAddModal &&
          <Modal
            title="Добавить занятие"
            setShowModal={setShowAddModal}
          >
            <AddLessonForm
              trainers={trainers}
              lessonTypes={lessonTypes}
              addLesson={onAddLesson}
            />
          </Modal>
      }
      {
        <LessonsList />
      }
    </div>
  )
}

export default observer(Lessons)
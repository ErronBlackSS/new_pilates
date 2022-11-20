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
import SwitchButtons from '../Components/Lessons/SwitchButtons'
import { Context } from '../index'

const LessonsAdmin = () => {

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

  useEffect(() => {
    getAndSetTrainers()
    getAndSetLessonTypes()
    LessonsStore.getLessonsCurrentWeek()
    console.log('how')
  }, [])

  return (
    <div className="pt-[50px] pr-[60px]">
      <div className="flex flex-row justify-between">
        <div className="flex gap-[40px]">
          <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
          Список занятий
          </span>
          <div className="flex flex-row">
            <FilterButtons />
          </div>
        </div>
        <SwitchButtons
          onSwitch={() => {}}
        />
      </div>
      <div className="w-full flex justify-end mt-[36px]">
        <Button
          handler={() => setShowAddModal(true)}
          color={ButtonColors.white}
          className="py-[2px] px-[14px]"
        >
          Добавить занятие
        </Button>
      </div>
      {
        showAddModal &&
          <Modal
            title="Добавить занятие"
            showModal={showAddModal}
            setShowModal={setShowAddModal}
            width={'300px'}
            height={'400px'}
          >
            <AddLessonForm
              trainers={trainers}
              lessonTypes={lessonTypes}
              addLesson={LessonsStore.addLesson}
            />
          </Modal>
      }
      {
        <LessonsList />
      }
    </div>
  )
}

export default observer(LessonsAdmin)
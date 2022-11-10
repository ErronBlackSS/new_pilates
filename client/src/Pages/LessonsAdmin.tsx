import React, { useEffect, useState } from 'react'
import Modal from '../Components/Common/Modal'
import AddLessonForm from '../Components/Forms/AddLessonForm'
import UserService from '../Services/UserService'
import LessonTypesService from '../Services/LessonTypesService'

const LessonsAdmin = () => {

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
  }, [])

  return (
    <div className="items-center flex flex-col h-screen w-full bg-[#ea8df7]">
      <h1>Занятия</h1>
      <button
        className="bg-[#008080] text-[#FFF] rounded-[12px] p-[10px] m-[10px]"
        onClick={() => setShowAddModal(true)}
      >
        Добавить занятие
      </button>
      {
        showAddModal &&
          <Modal
            showModal={showAddModal}
            setShowModal={setShowAddModal}
            width={'300px'}
            height={'400px'}
          >
            <AddLessonForm
              trainers={trainers}
              lessonTypes={lessonTypes}
            />
          </Modal>
      }
    </div>
  )
}

export default LessonsAdmin
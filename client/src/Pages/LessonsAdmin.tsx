import React, { useEffect, useState } from 'react'
import Modal from '../Components/Common/Modal'
import AddLessonForm from '../Components/Forms/AddLessonForm'
import UserService from '../Services/UserService'
import LessonTypesService from '../Services/LessonTypesService'
import LessonService from '../Services/LessonService'

const LessonsAdmin = () => {

  const [showAddModal, setShowAddModal] = useState(false)
  const [trainers, setTrainers] = useState([])
  const [lessonTypes, setLessonTypes] = useState([])
  const [lessons, setLessons] = useState([])

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

  const getLessons = async () => {
    const resp = await LessonService.getAll()
    setLessons(resp.data)
  }

  const onAddLesson = async (lesson) => {
    console.log(lesson.data)
    setLessons([lesson.data, ...lessons])
  }

  useEffect(() => {
    getAndSetTrainers()
    getAndSetLessonTypes()
    getLessons()
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
              addLesson={onAddLesson}
            />
          </Modal>
      }
      {
        <table
          className="bg-[#FFF] p-[25px] gap-[15px] table-fixed border-separate overflow-y-scroll"
        >
          <thead>
            <tr>
              <th>Тип занятия</th>
              <th>Тренер</th>
              <th>Дата</th>
              <th>Начало</th>
              <th>Конец</th>
              <th>Всего мест</th>
              <th>Занято</th>
            </tr>
          </thead>
          <tbody>
            {lessons && lessons.map((lesson, index) => (
              <tr
                className="bg-[#AAA] gap-[5px]"
                key={index}
              >
                <th>{lesson.title}</th>
                <th>{lesson.trainer}</th>
                <th>{lesson.date}</th>
                <th>{lesson.start_time}</th>
                <th>{lesson.end_time}</th>
                <th>{lesson.capacity}</th>
                <th>{lesson.occupied}</th>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

export default LessonsAdmin
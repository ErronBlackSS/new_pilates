import { useEffect, useState } from 'react'
import Modal from '../Components/Common/Modal'
import AddLessonTypeForm from '../Components/Forms/AddLessonTypeForm'
import LessonTypesService from '../Services/LessonTypesService'
import LessonTypeListItem from '../Components/LessonTypes/LessonTypeListItem'

const LessonTypes = () => {
  
  const [lessonTypes, setLessonTypes] = useState([])
  
  const getLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    console.log(resp.data)
    setLessonTypes(resp.data)
  }

  useEffect(() => {
    getLessonTypes()
  }, [])

  const [showModal, setShowModal] = useState(false)
  
  return (
    <div className="items-center flex flex-col h-screen w-full bg-[#ea8df7]">
      <h1>Типы занятий</h1>
      <button
        className="bg-[#008080] text-[#FFF] rounded-[12px] p-[10px] m-[10px]"
        onClick={() => setShowModal(true)}
      >
        Добавить тип занятия
      </button>
      {
        showModal &&
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            width={'300px'}
            height={'400px'}
          >
            <AddLessonTypeForm />
          </Modal>
      }
      {
        lessonTypes && 
        <table
          className="bg-[#FFF] p-[25px] gap-[15px] table-fixed"
        >
          <thead>
            <tr>
              <th>Название</th>
              <th>Описание</th>
              <th>Длительность</th>
              <th>Тип</th>
              <th>Изображение</th>
            </tr>
          </thead>
          <tbody>
            {lessonTypes.map((lesson, index) => {
              return (
                <LessonTypeListItem
                  key={index}
                  lessonType={lesson}
                />
              )
            })}
          </tbody>
        </table>
      }
    </div>
  )
}

export default LessonTypes
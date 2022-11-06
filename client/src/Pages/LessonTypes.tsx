import { useEffect, useState } from 'react'
import Modal from '../Components/Common/Modal'
import AddLessonTypeForm from '../Components/Forms/AddLessonTypeForm'
import LessonTypesService from '../Services/LessonTypesService'
import LessonTypesList from '../Components/LessonTypesList'

const LessonTypes = () => {
  
  const [lessonTypes, setLessonTypes] = useState([])
  
  const getLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    setLessonTypes(resp.data)
    console.log(lessonTypes)
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
        lessonTypes && <LessonTypesList lessonTypes={lessonTypes} />
      }
    </div>
  )
}

export default LessonTypes
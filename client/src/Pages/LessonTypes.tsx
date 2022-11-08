import { useEffect } from 'react'
import { useLessonTypes } from '../Hooks/UseLessonTypes'
import Modal from '../Components/Common/Modal'
import AddLessonTypeForm from '../Components/Forms/AddLessonTypeForm'
import LessonTypesService from '../Services/LessonTypesService'
import LessonTypeRow from '../Components/LessonTypes/LessonTypeRow'

const LessonTypes = () => {
  
  const {
    lessonTypes,
    getLessonTypes,
    showModal,
    setShowModal,
    pushLessonType,
    saveLessonTypeImage,
    removeLessonTypeImage
  } = useLessonTypes()

  const saveFile = async (event, id) => {
    const formData = new FormData()
    const files = [...event.target.files]
    formData.append('file', files[0])
    const resp = await LessonTypesService.saveFile(formData, id)
    saveLessonTypeImage(resp.data, id)
  }

  const removeFile = async (id) => {
    await LessonTypesService.removeFile(id)
    removeLessonTypeImage(id)
  }

  useEffect(() => {
    getLessonTypes()
  })
  
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
            <AddLessonTypeForm
              onAddLessonType={pushLessonType}
            />
          </Modal>
      }
      {
        lessonTypes && 
        <div
          className="h-full overflow-y-scroll mb-[50px]"
        >
          <table
            className="bg-[#FFF] p-[25px] gap-[15px] h-full table-fixed border-separate overflow-y-scroll"
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
                  <LessonTypeRow
                    key={index}
                    lessonType={lesson}
                    onSaveFile={saveFile}
                    onRemoveFile={removeFile}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default LessonTypes
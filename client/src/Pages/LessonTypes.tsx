import { useEffect } from 'react'
import { useLessonTypes } from '../Hooks/UseLessonTypes'
import Modal from '../Components/Common/Modal'
import AddLessonTypeForm from '../Components/Forms/AddLessonTypeForm'
import EditLessonTypeForm from '../Components/Forms/EditLessonTypeForm'
import LessonTypesService from '../Services/LessonTypesService'
import LessonTypeRow from '../Components/LessonTypes/LessonTypeRow'
import Button from '../Components/Common/Button'
import { ButtonColors } from '../Utils/constance'

const LessonTypes = () => {
  
  const {
    lessonTypes,
    getLessonTypes,
    showAddModal,
    setShowAddModal,
    pushLessonType,
    editLessonType,
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
  }, [])
  
  return (
    <>
      {
        showAddModal &&
          <Modal
            title="Добавить тип занятия"
            showModal={showAddModal}
            setShowModal={setShowAddModal}
            width={'300px'}
            height={'400px'}
          >
            <AddLessonTypeForm
              onAddLessonType={pushLessonType}
            />
          </Modal>
      }
      <div className="pt-[50px] pr-[60px]">
        <div className="flex flex-row justify-between items-center gap-[40px]">
          <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
            Типы занятий
          </span>
          <Button
            handler={() => setShowAddModal(true)}
            color={ButtonColors.white}
            className="py-[2px] px-[14px]"
          >
            Добавить тип
          </Button>
        </div>
      </div>
      <div
        className="flex flex-col bg-[#FEFAFA] mobile-above:py-[25px] mt-[14px]"
      >
        {lessonTypes.map((lessonType, index) => (
          <LessonTypeRow
            key={index}
            lessonType={lessonType}
            onEditLessonType={editLessonType}
          />
        ))}
      </div>
    </>
  )
}

export default LessonTypes
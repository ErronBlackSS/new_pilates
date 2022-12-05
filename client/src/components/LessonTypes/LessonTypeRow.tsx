import { useState } from 'react'
import { ButtonColors } from '../../Utils/constance'
import Button from '../Common/Button'
import ListRowBlock from '../Common/List/ListRowBlock'
import Modal from '../Common/Modal'
import AddLessonTypeForm from '../Forms/AddLessonTypeForm' 
import DeleteLessonTypeForm from '../Forms/DeleteLessonTypeForm'

const LessonTypeRow = ({lessonType, onEditLessonType }) => {
   
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  return (
    <>
      {
        showEditModal &&
          <Modal
            title="Редактирование типа занятия"
            showModal={showEditModal}
            setShowModal={setShowEditModal}
            width={'300px'}
            height={'400px'}
          >
            <AddLessonTypeForm
              onAddLessonType={onEditLessonType}
              defaultValue={lessonType}
            />
          </Modal>
      }
      {
        showDeleteModal &&
          <Modal
            title="Удаление типа занятия"
            showModal={showDeleteModal}
            setShowModal={setShowDeleteModal}
          >
            <DeleteLessonTypeForm
              lesson_id={lessonType.id}
              lesson_title={lessonType.title}
              setShowModal={setShowDeleteModal}
            />
          </Modal>
      }
      <div
        className="border-t border-[#D9D9DA] flex flex-row justify-between mobile-below:overflow-x-scroll items-center p-[10px]"
      >
        <div className="flex flex-row justifty-between items-center gap-[20px]">
          <ListRowBlock
            label="Название занятия"
            value={lessonType.title}
          />
          <ListRowBlock
            label="Тип занятия:"
            value={lessonType.type}
          />
          <ListRowBlock
            label="Длительность:"
            value={lessonType.duration}
          />
        </div>
        <div className="flex flex-row justifty-center items-center gap-[30px]">
          <Button
            handler={() => setShowEditModal(true)}
            color={ButtonColors.white}
            className={'py-[2px] px-[14px]'}
          >
            Изменить
          </Button>
          <Button
            handler={() => setShowDeleteModal(true)}
            color={ButtonColors.red}
            className={'py-[2px] px-[14px]'}
          >
            Удалить
          </Button>
        </div>
      </div>
    </>
  )
}

export default LessonTypeRow
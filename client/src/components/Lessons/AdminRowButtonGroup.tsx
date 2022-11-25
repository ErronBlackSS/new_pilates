import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import DeleteLessonForm from '../Forms/DeleteLessonForm'
import Modal from '../Common/Modal'
import { useState } from 'react'
import EditLessonForm from '../Forms/EditLessonForm'
import BookedUsers from './FormsContent/BookedUsers'

const AdminRowButtonGroup = ({ lesson_id }) => {
  const [showMoldalBooked, setShowMoldalBooked] = useState(false)
  const [showMoldalEdit, setShowMoldalEdit] = useState(false)
  const [showMoldalDelete, setShowMoldalDelete] = useState(false)

  return (
    <>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => { 
          setShowMoldalBooked(true) 
        }}
      >
        Записи
      </Button>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => {
          setShowMoldalEdit(true)
        }}
      >
        Изменить
      </Button>
      <Button
        color={ButtonColors.red}
        className="py-[2px] px-[14px]"
        handler={() => {
          setShowMoldalDelete(true)
        }}
      >
        Удалить
      </Button>
      {showMoldalBooked && <Modal
        title="Записи"
        showModal={showMoldalBooked}
        setShowModal={setShowMoldalBooked}
      >
        <BookedUsers lesson_id={lesson_id}/>
      </Modal>}
      {showMoldalEdit && <Modal
        title="Изменить"
        showModal={showMoldalEdit}
        setShowModal={setShowMoldalEdit}
      >
        <EditLessonForm trainers={[]} lessonTypes={[]} lesson_id={lesson_id} />
      </Modal>}
      {showMoldalDelete && <Modal
        title="Удалить"
        showModal={showMoldalDelete}
        setShowModal={setShowMoldalDelete}
      >
        <DeleteLessonForm lesson_id={lesson_id} setShowModal={setShowMoldalDelete}/>
      </Modal>}
    </>
  )
}

export default AdminRowButtonGroup
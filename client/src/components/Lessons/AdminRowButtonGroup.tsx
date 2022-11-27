import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import DeleteLessonForm from '../Forms/DeleteLessonForm'
import Modal from '../Common/Modal'
import { useState } from 'react'
import EditLessonForm from '../Forms/EditLessonForm'
import BookedUsers from './FormsContent/BookedUsers'

const AdminRowButtonGroup = ({ lesson_id }) => {
  const [showModalBooked, setShowModalBooked] = useState(false)
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)

  return (
    <>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => { 
          setShowModalBooked(true) 
        }}
      >
        Записи
      </Button>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => {
          setShowModalEdit(true)
        }}
      >
        Изменить
      </Button>
      <Button
        color={ButtonColors.red}
        className="py-[2px] px-[14px]"
        handler={() => {
          setShowModalDelete(true)
        }}
      >
        Удалить
      </Button>
      {showModalBooked && <Modal
        title="Записи"
        showModal={showModalBooked}
        setShowModal={setShowModalBooked}
      >
        <BookedUsers lesson_id={lesson_id}/>
      </Modal>}
      {showModalEdit && <Modal
        title="Изменить"
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
      >
        <EditLessonForm trainers={[]} lessonTypes={[]}lesson_id={lesson_id} />
      </Modal>}
      {showModalDelete && <Modal
        title="Удалить"
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      >
        <DeleteLessonForm lesson_id={lesson_id} setShowModal={setShowModalDelete}/>
      </Modal>}
    </>
  )
}

export default AdminRowButtonGroup
import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import DeleteLessonForm from '../Forms/DeleteLessonForm'
import Modal from '../Common/Modal'
import { useState } from 'react'

const AdminRowButtonGroup = () => {
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
        <div>123123</div>
      </Modal>}
      {showMoldalEdit && <Modal
        title="Изменить"
        showModal={showMoldalEdit}
        setShowModal={setShowMoldalEdit}
      >
        <div>123123</div>
      </Modal>}
      {showMoldalDelete && <Modal
        title="Удалить"
        showModal={showMoldalDelete}
        setShowModal={setShowMoldalDelete}
      >
        <DeleteLessonForm />
      </Modal>}
    </>
  )
}

export default AdminRowButtonGroup
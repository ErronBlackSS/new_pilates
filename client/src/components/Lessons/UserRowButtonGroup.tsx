import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import { useContext, useState } from 'react'
import Modal from '../Common/Modal'
import LessonsStore from '../../Store/LessonsStore'
import WatchDescription from './FormsContent/WatchDescription'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
// TODO: Вынести содержимое модалки удаления записи в отдельный компонент
const UserRowButtonGroup = ({ lesson_id }) => {

  const { user } = useContext(Context)

  const [showMoldalCancel, setShowMoldalCancel] = useState(false)
  const [showMoldalEdit, setShowMoldalEdit] = useState(false)

  const onCancelLesson = () => {
    LessonsStore.cancelLesson(lesson_id, user.user.id)
    setShowMoldalCancel(false)
  }

  return (
    <>
      <Button
        color={ButtonColors.white}
        className="py-[2px] px-[14px]"
        handler={() => { setShowMoldalEdit(true) }}
      >
        Читать описание
      </Button>
      <Button
        color={ButtonColors.red}
        className="py-[2px] px-[14px]"
        handler={() => { setShowMoldalCancel(true) }}
      >
        Отменить запись
      </Button>
      {showMoldalEdit && <Modal
        title="Описание"
        showModal={showMoldalEdit}
        setShowModal={setShowMoldalEdit}
      >
        <WatchDescription lesson_id={lesson_id} />
      </Modal>}
      {showMoldalCancel && <Modal
        title="Отменить запись"
        showModal={showMoldalCancel}
        setShowModal={setShowMoldalCancel}
      >
        <div
          className="flex justify-center text-left"
        >
          <div className="flex flex-col justify-center items-center gap-[30px]">
            <div>
              Вы уверены, что хотите отменить запись на занятие?
            </div>
            <Button
              color={ButtonColors.red}
              className="py-[2px] px-[14px]"
              handler={onCancelLesson}
            >
              Отменить
            </Button>
          </div>
        </div>
      </Modal>}
    </>
  )
}

export default observer(UserRowButtonGroup)
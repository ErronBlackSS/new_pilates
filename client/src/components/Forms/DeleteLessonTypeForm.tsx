import LessonTypesService from '../../Services/LessonTypesService'
import { ButtonColors } from '../../Utils/constance'
import Button from '../Common/Button'

const DeleteLessonTypeForm = ({ lesson_id, setShowModal }) => {
  const onDeleteLesson = () => {
    LessonTypesService.delete(lesson_id)
    setShowModal(false)
  }
  
  return (
    <div
      className="flex justify-center text-left"
    >
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <div>
              Вы уверены, что хотите удалить тип занятия?
        </div>
        <Button
          color={ButtonColors.red}
          className="py-[2px] px-[14px]"
          handler={onDeleteLesson}
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}

export default DeleteLessonTypeForm
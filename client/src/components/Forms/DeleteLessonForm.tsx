import React from 'react'
import Button from '../../Components/Common/Button'
import { ButtonColors } from '../../Utils/constance'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../../Store/LessonsStore'

const DeleteLessonForm = ({ lesson_id }) => {
  
  const lesson = LessonsStore.lessons.find(lesson => lesson.lesson_id === lesson_id)

  const onDeleteLesson = () => {
    LessonsStore.deleteLesson(lesson_id)
  }

  return (
    <div
      className="flex justify-center text-left"
    >
      <div className="flex flex-col justify-center items-center gap-[30px]">
        <div>
          Вы уверены, что хотите удалить занятие?
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

export default observer(DeleteLessonForm)
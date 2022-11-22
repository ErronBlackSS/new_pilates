import React from 'react'
import Button from '../../Components/Common/Button'
import { ButtonColors } from '../../Utils/constance'

const DeleteLessonForm = () => {
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
          handler={() => { console.log('edit') }}
        >
          Удалить
        </Button>
      </div>
    </div>
  )
}

export default DeleteLessonForm
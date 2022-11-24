import Button from '../../Common/Button'
import { ButtonColors } from '../../../Utils/constance'
import { useContext, useEffect, useState } from 'react'
import Modal from '../../Common/Modal'
import LessonsStore from '../../../Store/LessonsStore'
import { observer } from 'mobx-react-lite'

const WatchDescription = ({ lesson_id }) => {

  const currentLesson = LessonsStore.lessons.find(lesson => lesson.lesson_id === lesson_id)
  console.log(LessonsStore.lessons)
  return (
    <div
      className="flex text-left max-w-[600px]"
    >
      <div className="flex flex-col gap-[30px]">
        <div>
          <span className="text-bordo">Тренер: </span>
          {currentLesson?.name + ' ' + currentLesson?.lastname}
        </div>
        <div>
          <span className="text-bordo">Описание: </span>
          {currentLesson.description}
        </div>
      </div>
    </div>
  )
}

export default observer(WatchDescription)
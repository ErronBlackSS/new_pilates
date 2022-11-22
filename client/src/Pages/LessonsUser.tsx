import { useEffect, useState, useContext } from 'react'
import LessonsStore from '../Store/LessonsStore'
import LessonsList from '../Components/Lessons/LessonsList'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'

const LessonsUser = () => {

  const { user } = useContext(Context)
  useEffect(() => {
    LessonsStore.getUserBookedLessons(user.user.id)
  }, [])

  return (
    <div className="pt-[50px] pr-[60px]">
      <div className="flex flex-row justify-between">
        <div className="flex gap-[40px]">
          <span className="text-[36px] leading-[56px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
          Список занятий
          </span>
        </div>
      </div>
      <LessonsList />
    </div>
  )
}

export default observer(LessonsUser)
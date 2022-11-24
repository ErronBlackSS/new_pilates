import { FC } from 'react'
import LessonsRow from './LessonsRow'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../../Store/LessonsStore'

const LessonsList: FC = () => {
  return (
    <div
      className="flex flex-col bg-[#FEFAFA] py-[25px] mt-[14px]"
    >
      {LessonsStore.lessons && LessonsStore.lessons.map((lesson, index) => (
        <LessonsRow 
          key={index}
          title={lesson.title}
          trainer={lesson.trainer}
          date={lesson.date}
          start_time={lesson.start_time}
          end_time={lesson.end_time}
          lesson_id={lesson.lesson_id}
        />))}
    </div>
  )
}

export default observer(LessonsList)
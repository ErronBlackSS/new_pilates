import { FC } from 'react'
import { ILessonType } from '../Types/ResponseTypes/LessonTypesResponse'
import LessonTypeListItem from './LessonTypes/LessonTypeListItem'

interface ILessonTypesList {
  lessonTypes: ILessonType[]
}

const LessonTypesList: FC<ILessonTypesList> = ({ lessonTypes }) => {
  return (
    <div className="flex flex-col p-[25px] bg-[#FFF] rounded-[12px]">
      {lessonTypes.map((lessonType, index) => {
        return (
          <LessonTypeListItem
            key={index}
            lessonType={lessonType}
          />
        )
      })}
    </div>
  )
}

export default LessonTypesList
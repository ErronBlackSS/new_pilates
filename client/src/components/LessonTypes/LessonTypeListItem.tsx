import React, { FC } from 'react'
import { ILessonType } from '../../Types/ResponseTypes/LessonTypesResponse'

const LessonTypeListItem = (lessonType) => {
  return (
    <div className="flex flex-row">
      {lessonType.title}
      {lessonType.description}
      {lessonType.duration}
      {lessonType.type}
      {lessonType.image}  
    </div>
  )
}

export default LessonTypeListItem
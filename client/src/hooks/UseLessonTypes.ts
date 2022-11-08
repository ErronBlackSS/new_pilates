import { useState } from 'react'
import LessonTypesService from '../Services/LessonTypesService'

export const useLessonTypes = () => {
  const [lessonTypes, setLessonTypes] = useState([])
  const [showModal, setShowModal] = useState(false)
  
  const pushLessonType = (lessonType: any) => {
    setLessonTypes([...lessonTypes, lessonType])
    setShowModal(false)
  }

  const getLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    console.log(resp)
    setLessonTypes(resp.data)
  }

  const saveLessonTypeImage = (image, id) => {
    const updatedLessonTypes = lessonTypes.map(lessonType => {
      if (lessonType.id === id) {
        return { ...lessonType, image_url: image }
      }
      return lessonType
    })
    setLessonTypes(updatedLessonTypes)
  }

  const removeLessonTypeImage = (id) => {
    const updatedLessonTypes = lessonTypes.map(lessonType => {
      if (lessonType.id === id) {
        return { ...lessonType, image_url: null }
      }
      return lessonType
    })
    setLessonTypes(updatedLessonTypes)
  }

  return {
    lessonTypes,
    getLessonTypes,
    showModal,
    setShowModal,
    pushLessonType,
    saveLessonTypeImage,
    removeLessonTypeImage
  }
}
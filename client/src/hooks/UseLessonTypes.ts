import { useState } from 'react'
import LessonTypesService from '../Services/LessonTypesService'

export const useLessonTypes = () => {
  const [lessonTypes, setLessonTypes] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const pushLessonType = (lessonType: any) => {
    setLessonTypes([...lessonTypes, lessonType])
    setShowAddModal(false)
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

  const removeLessonType = (id) => {
    setLessonTypes(lessonTypes.filter(lessonType => lessonType.id !== id))
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
    showAddModal,
    setShowAddModal,
    showEditModal,
    setShowEditModal,
    pushLessonType,
    saveLessonTypeImage,
    removeLessonTypeImage,
    removeLessonType
  }
}
import { useEffect, useState } from 'react'
import LessonTypesService from '../Services/LessonTypesService'

export const useLessonTypes = () => {
  const [lessonTypes, setLessonTypes] = useState([])
  const [showAddModal, setShowAddModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)

  const pushLessonType = (lessonType) => {
    setLessonTypes([...lessonTypes, lessonType])
    setShowAddModal(false)
  }

  const getLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    console.log(resp.data, 'ltypes')
    setLessonTypes(resp.data)
  }

  const deleteLessonType = async (id) => {
    await LessonTypesService.delete(id)
    setLessonTypes(lessonTypes.filter(lessonType => lessonType.id !== id))
  }

  const editLessonType = async (id, title, description, type, duration, image) => {
    const lessonType = await LessonTypesService.update(id, title, description, type, duration)

    if (image instanceof FormData) {
      const lessonTypeImage = await LessonTypesService.saveLessonTypeImage(image, id)
      console.log(lessonTypeImage, 'IMAGEGEGE')
      const newLessonType = {...lessonType.data, ...lessonTypeImage.data}
      setLessonTypes(lessonTypes.map(lType => lType.id === newLessonType.id ? newLessonType : lType))
      return
    }
    const newLessonType = {...lessonType.data, image_url: image}
    setLessonTypes(lessonTypes.map(lType => lType.id === newLessonType.id ? newLessonType : lType))
  }

  useEffect(() => {
    getLessonTypes()
  }, [])

  return {
    lessonTypes,
    getLessonTypes,
    showAddModal,
    setShowAddModal,
    showEditModal,
    setShowEditModal,
    pushLessonType,
    editLessonType,
    deleteLessonType
  }
}
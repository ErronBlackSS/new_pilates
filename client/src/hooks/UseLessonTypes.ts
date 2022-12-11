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
    setLessonTypes(resp.data)
  }

  const deleteLessonType = async (id) => {
    await LessonTypesService.delete(id)
    setLessonTypes(lessonTypes.filter(lessonType => lessonType.id !== id))
  }

  const editLessonType = async (id, title, description, type, duration, image) => {
    const lessonType = await LessonTypesService.update(id, image, title, description, type, duration)
    setLessonTypes(lessonTypes.map(lType => lType.id === lessonType.data.id ? lessonType.data : lType))
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
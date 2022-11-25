
import React, { FC } from 'react'
import { useInput } from '../../Hooks/UseInput'
import LessonTypesService from '../../Services/LessonTypesService'
import InputItem from './Components/InputItem'

interface ILessonTypesFields {
  id: number
  title: string
  description: string
  duration: string
  type: string
}

const EditLessonTypeForm = (onEditLessonType, fields: ILessonTypesFields) => {

  const title = useInput({initialvalue: fields.title, validations: { isEmpty: true }})
  const description = useInput({initialvalue: fields.description, validations: { isEmpty: true }})
  const duration = useInput({initialvalue: fields.duration, validations: { isEmpty: true }})
  const type = useInput({initialvalue: fields.type, validations: { isEmpty: true }})

  const formDisabled =
    !title.validations.inputValid ||
    !description.validations.inputValid ||
    !duration.validations.inputValid ||
    !type.validations.inputValid

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const lessonType = await LessonTypesService.update(fields.id ,title.value, description.value, type.value, duration.value)
    const lessonTypeData = lessonType.data
    onEditLessonType({...lessonTypeData })
  }


  return (
    <div
      className="flex justify-center text-left"
    >
      <form
        onSubmit={onSubmit}
      >
        <InputItem
          label="Название"
          type="text"
          name="name"
          placeholder="Введите название"
          validations={title.validations}
          dirty={title.isDirty}
          onBlur={title.onBlur}
          onChange={title.onChange}
        />
        <InputItem
          label="Описание"
          type="text"
          name="description"
          placeholder="Введите описание"
          validations={description.validations}
          dirty={description.isDirty}
          onBlur={description.onBlur}
          onChange={description.onChange}
        />
        <InputItem
          label="Длительность"
          type="text"
          name="duration"
          placeholder="Введите длительность"
          validations={duration.validations}
          dirty={duration.isDirty}
          onBlur={duration.onBlur}
          onChange={duration.onChange}
        />
        <InputItem
          label="Тип"
          type="text"
          name="type"
          placeholder="Введите тип"
          validations={type.validations}
          dirty={type.isDirty}
          onBlur={type.onBlur}
          onChange={type.onChange}
        />
        <button
          disabled={formDisabled}
          className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
        >
          Изменить тип занятия
        </button>
      </form>
    </div>
  )
}

export default EditLessonTypeForm
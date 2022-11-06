import React from 'react'
import { useInput } from '../../Hooks/UseInput'
import LessonTypesService from '../../Services/LessonTypesService'
import InputItem from './Components/InputItem'

const AddLessonTypeForm = ({ onAddLessonType }) => {
 
  const title = useInput({initialvalue: '', validations: { isEmpty: true }})
  const description = useInput({initialvalue: '', validations: { isEmpty: true }})
  const duration = useInput({initialvalue: '', validations: { isEmpty: true }})
  const type = useInput({initialvalue: '', validations: { isEmpty: true }})

  const formDisabled =
    !title.validations.inputValid ||
    !description.validations.inputValid ||
    !duration.validations.inputValid

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const lessonType = await LessonTypesService.create(title.value, description.value, type.value, duration.value)
    const lessonTypeData = lessonType.data
    onAddLessonType(lessonTypeData)
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
          className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-[#D11655] opacity-40' : 'bg-bordo')}
        >
          Создать тип занятия
        </button>
      </form>
    </div>
  )
}

export default AddLessonTypeForm
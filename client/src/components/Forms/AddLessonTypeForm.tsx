import { useState, FC } from 'react'
import { useInput } from '../../Hooks/UseInput'
import LessonTypesService from '../../Services/LessonTypesService'
import { ILessonTypesFields } from '../../Types/LessonsTypes/LessonsTypes'
import InputItem from './Components/InputItem'

interface IAddLessonTypeForm {
  onAddLessonType?: (lessonType: ILessonTypesFields) => void
  onEditLessonType?: (lessonType: ILessonTypesFields) => void
  defaultValue?: ILessonTypesFields
}

const AddLessonTypeForm: FC<IAddLessonTypeForm> = ({ onAddLessonType, onEditLessonType, defaultValue }) => {
 
  const title = useInput({initialvalue: defaultValue?.title ?? '', validations: { isEmpty: true }})
  const description = useInput({initialvalue: defaultValue?.description ?? '', validations: { isEmpty: true }})
  const duration = useInput({initialvalue: defaultValue?.duration ?? 0, validations: { isEmpty: true }})
  const type = useInput({initialvalue: defaultValue?.type ?? '', validations: { isEmpty: true }})
  const [image, setImage] = useState(null)

  const formDisabled =
    !title.validations.inputValid ||
    !description.validations.inputValid ||
    !duration.validations.inputValid

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    if(!defaultValue) {
      const lessonType = await LessonTypesService.create(title.value, description.value, type.value, duration.value, image)
      const lessonTypeData = lessonType.data
      onAddLessonType({...lessonTypeData})
    } else {
      const lessonType = await LessonTypesService.update(defaultValue.id, title.value, description.value, type.value, duration.value, image)
      console.log(lessonType, 'lessonType')
      const lessonTypeData = lessonType.data
      onEditLessonType({...lessonTypeData})
    }
  }

  return (
    <div
      className="flex justify-center text-left"
    >
      <form
        onSubmit={onSubmit}
      >
        <div className="w-full flex flex-row items-center gap-[28px] relative">              
          <div className="w-[180px] h-[100px] bg-[#D9D9DA] rounded-[10px]">
            {(image || defaultValue?.image_url) && <img className="w-full h-full object-cover rounded-[10px]" src={defaultValue?.image_url ?? URL.createObjectURL(image)} alt="" />}
          </div>
          <p>
            Добавить фотографию
            <input
              className="absolute opacity-0 left-0 w-full cursor-pointer"
              type="file"
              name="uploadFile"
              onChange={(event) => {
                defaultValue.image_url = null
                setImage(event.target.files[0])
              }}
            ></input>
          </p>
        </div>
        <div className="flex flew-row gap-[30px]">
          <InputItem
            label="Название"
            type="text"
            name="name"
            placeholder="Введите название"
            validations={title.validations}
            dirty={title.isDirty}
            defaultValue={defaultValue?.title}
            onBlur={title.onBlur}
            onChange={title.onChange}
          />
        </div>
        <div className="flex flew-row gap-[30px]">
          <InputItem
            label="Длительность"
            type="text"
            name="duration"
            placeholder="Введите длительность"
            validations={duration.validations}
            dirty={duration.isDirty}
            defaultValue={defaultValue?.duration}
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
            defaultValue={defaultValue?.type}
            onBlur={type.onBlur}
            onChange={type.onChange}
          />
        </div>
        <textarea
          className="w-full h-[100px] rounded-[10px] border border-[#D9D9DA] p-[10px] mt-[20px] mb-[20px]"
          value={description.value}
          onChange={description.onChange}
          onBlur={description.onBlur}
        />
        <button
          disabled={formDisabled}
          className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
        >
          Применить
        </button>
      </form>
    </div>
  )
}

export default AddLessonTypeForm
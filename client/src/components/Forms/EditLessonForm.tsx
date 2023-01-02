import { FC, useEffect, useState } from 'react'
import Select, { option } from '../Common/Select'
import DatePicker from 'react-datepicker'
import LessonsStore from '../../Store/LessonsStore'
import { observer } from 'mobx-react-lite'
import { UseLessonTypesAndTrainers } from '../../Hooks/UseLessonTypesAndTrainers'

interface IEditLessonForm {
  lessonId: number
  setShowModal: (val: boolean) => void
}

const EditLessonForm: FC<IEditLessonForm> = ({ lessonId, setShowModal }) => {
  
  const currentLesson = LessonsStore.lessons.find((item) => item.lesson_id === lessonId)

  const { trainers, lessonTypes, defaultTrainer, defaultLessonType } = UseLessonTypesAndTrainers(currentLesson)

  const [trainer, setTrainer] = useState<option>(defaultTrainer)
  const [lessonType, setLessonType] = useState<option>(defaultLessonType)
  const [startTime, setStartTime] = useState(currentLesson.start_time.slice(0, 5))
  const [endTime, setEndTime] = useState(currentLesson.end_time.slice(0, 5))
  const [startDate, setStartDate] = useState(new Date(currentLesson.date))
  const [capacity, setCapacity] = useState(currentLesson.capacity)
  
  const formDisabled = !trainer?.value || !lessonType?.value || !startTime || !endTime || !startDate

  const onSubmit = async (e: any) => {
    e.preventDefault()
    const data = {
      id: lessonId,
      coach_id: trainer.value,
      lesson_type_id: lessonType.value,
      capacity: capacity,
      date: new Date(new Date(startDate.setDate(startDate.getDate())).setHours(3)),
      start_time: startTime,
      end_time: endTime
    }
    setShowModal(false)
    LessonsStore.updateLesson(data)
  }

  useEffect(() => {
    setTrainer(defaultTrainer)
    setLessonType(defaultLessonType)
  }, [defaultLessonType, defaultTrainer])

  return (
   
    <div
      className="flex justify-center text-left"
    >
      <form
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-[25px]">
          <Select
            options={trainers}
            label="Тренер"
            onSelect={setTrainer}
            defaultValue={trainer}
          />
          <Select
            options={lessonTypes}
            label="Тип занятия"
            onSelect={setLessonType}
            defaultValue={lessonType}
          />
          <input value={capacity} onChange={(e) => { setCapacity(+e.target.value) }} type="number" />
          <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </div>
        <button
          disabled={formDisabled}
          className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-[#D11655] opacity-40' : 'bg-bordo')}
        >
          Изменить
        </button>
      </form>
    </div>
  )
}

export default observer(EditLessonForm)
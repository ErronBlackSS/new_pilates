import { FC, FormEvent, useState } from 'react'
import Select from '../Common/Select'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import LessonService from '../../Services/LessonService'
import { option } from '../Common/Select'
import { Lesson } from '../../Types/LessonsTypes/LessonsTypes'

interface IAddLessonForm {
  trainers: option[]
  lessonTypes: option[]
  addLesson: (lesson: Lesson) => void
}

const AddLessonForm: FC<IAddLessonForm> = ({ trainers, lessonTypes, addLesson }) => {
  
  const [trainer, setTrainer] = useState({ value: 0, label: '' })
  const [lessonType, setLessonType] = useState({ value: 0, label: '' })
  const [startTime, setStartTime] = useState('10:00')
  const [endTime, setEndTime] = useState('10:00')
  const [startDate, setStartDate] = useState(new Date())
  const [capacity, setCapacity] = useState(0)

  const formDisabled = !trainer.value || !lessonType.value || !startTime || !endTime || !startDate

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      coach_id: trainer.value,
      lesson_type_id: lessonType.value,
      capacity: capacity,
      date: new Date(startDate.setDate(startDate.getDate())),
      start_time: startTime,
      end_time: endTime
    }
    const resp = await LessonService.createLesson(data)
    addLesson(resp.data)
  }

  return (
    <div
      className="flex justify-center text-left"
    >
      <form
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-[25px]">
          <Select options={trainers} label="Тренер" onSelect={setTrainer}/>
          <Select options={lessonTypes} label="Тип занятия" onSelect={setLessonType}/>
          <input value={capacity} onChange={(e) => { setCapacity(+e.target.value) }} />
          <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
        </div>
        <button
          disabled={formDisabled}
          className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-bordo opacity-40' : 'bg-bordo')}
        >
          Создать
        </button>
      </form>
    </div>
  )
}

export default AddLessonForm
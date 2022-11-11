import React, { useState } from 'react'
import Select from '../Common/Select'
import { TimePicker } from 'react-ios-time-picker'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const AddLessonForm = ({ trainers, lessonTypes }) => {
  
  const [trainer, setTrainer] = useState({ value: '', label: '' })
  const [lessonType, setLessonType] = useState({ value: '', label: '' })
  const [startTime, setStartTime] = useState('10:00')
  const [endTime, setEndTime] = useState('10:00')
  const [startDate, setStartDate] = useState(new Date())

  const formDisabled = !trainer.value || !lessonType.value || !startTime || !endTime || !startDate

  const onSubmit = (value) => {
    console.log(trainer, lessonType, value)
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
          <div className="flex flex-row gap-[30px]">
            <TimePicker
              onSave={setStartTime}
              value={startTime}
              saveButtonText="Сохранить"
              cancelButtonText="Отменить"
            />
            <TimePicker
              onSave={setEndTime}
              value={endTime}
              saveButtonText="Сохранить"
              cancelButtonText="Отменить"
            />
          </div>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
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

export default AddLessonForm
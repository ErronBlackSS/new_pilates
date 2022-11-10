import React, { useState } from 'react'
import Select from '../Common/Select'

const AddLessonForm = ({ trainers, lessonTypes }) => {
  
  const [trainer, setTrainer] = useState({ value: '', label: '' })
  const [lessonType, setLessonType] = useState({ value: '', label: '' })
  
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
        </div>
      </form>
    </div>
  )
}

export default AddLessonForm
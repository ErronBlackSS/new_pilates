import React from 'react'
import Select from '../Common/Select'

const AddLessonForm = () => {
  
  const options = [
    '111111111111111',
    '222222222222222',
    '333333333333333'
  ]

  return (
    <div
      className="flex justify-center text-left"
    >
      <Select options={options}/>
    </div>
  )
}

export default AddLessonForm
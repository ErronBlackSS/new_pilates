import React, { useState } from 'react'
import Modal from '../Components/Common/Modal'
import AddLessonForm from '../Components/Forms/AddLessonForm'
import Select from '../Components/Common/Select'

const LessonsAdmin = () => {

  const [showAddModal, setShowAddModal] = useState(false)
  
  const options = [
    '111111111111111',
    '222222222222222',
    '333333333333333'
  ]

  return (
    <div className="items-center flex flex-col h-screen w-full bg-[#ea8df7]">
      <h1>Занятия</h1>
      <button
        className="bg-[#008080] text-[#FFF] rounded-[12px] p-[10px] m-[10px]"
        onClick={() => setShowAddModal(true)}
      >
        Добавить занятие
      </button>
      {
        showAddModal &&
          <Modal
            showModal={showAddModal}
            setShowModal={setShowAddModal}
            width={'300px'}
            height={'400px'}
          >
            <AddLessonForm />
          </Modal>
      }       
      <Select options={options}/>
      <hr />
      <hr />
      <hr />
      <hr />
      <Select options={options}/>
    </div>
  )
}

export default LessonsAdmin
import React, { useState } from 'react'
import Modal from '../Components/Common/Modal'

const LessonsAdmin = () => {

  const [showAddModal, setShowAddModal] = useState(false)

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
            567
          </Modal>
      }       
    </div>
  )
}

export default LessonsAdmin
import { FC } from 'react'

interface IModal {
  showModal: boolean
  children: any
  setShowModal: (value: boolean) => void
  width?: string
  height?: string
}

const Modal: FC<IModal> = ({ showModal, setShowModal, children, width, height }) => {

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div 
      className="fixed w-[100vw] h-[100vh] top-0 left-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)]"
      onClick={closeModal}
    >
      <div
        className="bg-[#FFF] h-[400px] w-[300px] rounded-[12px] p-[20px] transition-all duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div>
              Название модалки
            </div>
            <div>
              <button onClick={closeModal}>
                X
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            {children}
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Modal
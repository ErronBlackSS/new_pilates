import { useState } from 'react'
import { ButtonColors } from '../../Utils/constance'
import Button from '../Common/Button'
import Modal from '../Common/Modal'

const DirectionItem = ({title, description, duration, image_url}) => {


  const [showModalInfo, setShowModalInfo] = useState(false)

  const imageLink = image_url? image_url : 'http://localhost:5000/files/test_yoga.png'

  return (
    <>
      {showModalInfo && <Modal
        title="Жопа"
        showModal={showModalInfo}
        setShowModal={setShowModalInfo}
      >
        Инфа
      </Modal>}
      <div className="">   
        <div>
          <div className="flex flex-row justify-between text-[16px] mobile-below:text-[12px]">
            <div>{title}</div>
            <div>{duration} минут</div>
          </div>
          <div>
            <div className="relative w-[389px] h-[178px] mobile-below:w-[231px] mobile-below:h-[125px]">  
              <div className="absolute bottom-0">
                <img src={imageLink} alt="2" className="rounded-[10px] w-[389px] h-[178px] object-cover mobile-below:w-[231px] mobile-below:h-[125px]"></img>    
              </div>
              <div className="absolute right-0 bottom-0 p-[5px]">
                <Button
                  className="w-[128px] h-[40px] text-[16px] rounded-[10px] mobile-below:w-[109px] mobile-below:h-[28px] mobile-below:rounded-[7px] mobile-below:text-[14px]"
                  color={ButtonColors.bordo}
                  handler={() => {
                    setShowModalInfo(true)
                  }}
                >
                Подробнее
                </Button>
              
                
              </div>
            </div>            
          </div>
        </div>      
      </div>  
    </>
  )
}

export default DirectionItem
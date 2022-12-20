import Modal from '../Common/Modal'

const TrainerItem = ({name, lastname, image_url}) => {

  const imageLink = image_url? image_url : 'http://localhost:8080/files/user_photos/sss.png'

  const isBoss = (name === 'Екатерина' && lastname === 'Федоровская') ? true : false 

  return (
    <div className="flex flex-col bg-[#FFFEFE] rounded-[10px] shadow-md w-[284px] h-[491px] mobile-below:w-[216px] mobile-below:h-[361px]">
      <div className="relative w-[284px] mobile-below:w-[216px] mobile-below:h-[204px]">
        <img className="w-[284px] h-[284px] rounded-t-[10px] object-cover mobile-below:w-[216px] mobile-below:h-[204px]" src={imageLink} alt="trainerImage"/>
        {isBoss &&
            <div className="flex justify-center items-center w-full h-[44px] rounded-t-[10px] absolute bg-[#464646]/70 top-0 mobile-below:h-[34px]">
              <div className="text-[#F2F2F3] text-[20px] mobile-below:text-[16px]">Руководитель студии</div>
            </div>
        }
        <div className="w-full absolute bottom-0 triangle-top"></div>
      </div>
      <div className="px-[9px]">
        <h1 className="text-center text-[#1B1B1B] text-[20px] mt-[24px] mb-[12px] mobile-below:text-[16px] mobile-below:mt-[14px] mobile-below:mb-[10px]">{name + ' ' + lastname}</h1>
        <div className="w-[82%] h-[3px] bg-bordo m-auto mb-[24px] mobile-below:mb-[16px]"></div>    
        <h2 className="text-[#1B1B1B] text-[16px] mobile-below:text-[12px]">Description</h2>          
        <h3 className="text-[#1B1B1B] text-[16px] mobile-below:text-[12px]">Role</h3>
      </div>
      <button className="w-[94%] h-[40px] text-[#fff] text-[16px] mx-auto mt-[6px] bottom-0 cursor-pointer rounded-[10px] bg-bordo mobile-below:text-[14px] mobile-below:h-[28px] mobile-below:rounded-[8px]">
        Подробнее
      </button>
    </div>
  )
}

export default TrainerItem
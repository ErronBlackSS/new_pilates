const TrainersSwipe = () => {
  const trainer = {
    isBoss: true,
    name: 'Федоровская Екатерина',
    description: 'Инструктор групповых программ',
    role: 'Персональный тренер'
  }
    
  return (
    <div className="flex flex-row overflow-x-scroll scrollbar-hide py-[4px]">
      {
        [1].map((element, index) => {
          return (     
            <div key={index} className="flex flex-col bg-[#FFFEFE] rounded-[10px] shadow-md w-[284px] h-[491px] mobile-below:w-[216px] mobile-below:h-[361px] mobile-below:mx-[16px]">
              <div className="relative w-[284px] mobile-below:w-[216px]">
                <img className="rounded-t-[10px]" src="http://localhost:5000/files/img.png" alt="mainImage"/>
                {trainer.isBoss &&
                <div className="flex justify-center items-center w-full h-[44px] rounded-t-[10px] absolute bg-[#464646]/70 top-0 mobile-below:h-[34px]">
                  <div className="text-[#F2F2F3] text-[20px] mobile-below:text-[16px]">Руководитель студии</div>
                </div>}
                <div className="w-full absolute bottom-0 triangle-top"></div>
              </div>
              <div className="px-[9px]">
                <h1 className="text-center text-[#1B1B1B] text-[20px] mt-[24px] mb-[12px] mobile-below:text-[16px] mobile-below:mt-[14px] mobile-below:mb-[10px]">{trainer.name}</h1>
                <div className="w-[82%] h-[3px] bg-[#D11655] m-auto mb-[24px] mobile-below:mb-[16px]"></div>    
                <h2 className="text-[#1B1B1B] text-[16px] mobile-below:text-[12px]">{trainer.description}</h2>          
                <h3 className="text-[#1B1B1B] text-[16px] mobile-below:text-[12px]">{trainer.role}</h3>
              </div>
              <button className="w-[94%] h-[40px] text-[#fff] text-[16px] mx-auto mt-[6px] bottom-0 cursor-pointer mb-[0px] rounded-[10px] bg-[#D11655] mobile-below:text-[14px] mobile-below:h-[28px] mobile-below:rounded-[8px]">
            Подробнее
              </button>
            </div>
          )
        })
      }
    </div>
  ) 
}

export default TrainersSwipe
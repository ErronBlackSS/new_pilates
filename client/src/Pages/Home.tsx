import Shedule from '../Components/Shedule'

const Main = () => {
  return (
    <>
      <div className="flex mobile-below:flex-col mobile-above:flex-row justify-left">
        <div className="max-w-[500px]">
          <div className="flex flex-col">
            <div className="ml-[73px] mt-[52px]">
              <span className="text-[64px] leading-[88px] text-[#1B1B1B] mobile-below:text-[22px] font">
              Студия Екатерины Федоровской
              </span>
            </div>
            <div className="ml-[73px] mt-[28px]">
              <span className="text-[24px] leading-[40px] text-[#5C5C5C] mobile-below:text-[14px]">
              Квалифицированный подход с заботой о Вашем здоровье
              </span>
            </div>
            <div className="ml-[73px] mt-[52px]">
              <button className="w-[293px] h-[56px] gap-[10px] px-6 py-2 text-[#fff] text-[20px] cursor-pointer rounded-[10px] bg-bordo">
              Записаться на занятие
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex bg-[#FFFEFE] shadow-md m-[52px] pl-[52px] pt-[52px] rounded-[28px]">
            <ul className="list-none text-[20px] text-[#1B1B1B] gap-[20px]">
              <li className="pb-[31px]">Уникальные направления body&mind</li>
              <li className="py-[32px]">Занятия в формате мини-групп</li>
              <li className="py-[32px]">Чистота и свежий воздух</li>
              <li className="pt-[32px] pb-[32px]">Заботливые, опытные тренеры</li>
              <li className="pt-[32px] pb-[52px]">Абонементы без ограничения сроков</li>
            </ul>          
            <div className="flex items-center">
              <img src="http://localhost:5000/files/girl.png" alt="mainImage" />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[73px] mt-[117px] mb-[69px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[50px]">
        <h1 className="text-[44px] mobile-below:text-[24px]">Прайс-лист</h1>
      </div>
      <div className="form-flex">      
        <div className="flex flex-col w-full mx-[25px] ml-[73px] mobile-below:mx-[0px]">
          <h2 className="text-[24px] mobile-below:text-[16px] mobile-below:ml-[19px]">Индивидуальные тренировки</h2>
          <div className="flex bg-[#FFFEFE] w-full shadow-md justify-between pl-[32px] mt-[25px] mobile-below:mb-[25px] mobile-below:mt-[15px]">    
            <div className="flex flex-col w-full relative text-[20px] my-[44px] mobile-below:my-[20px] mobile-below:text-[13px]">
              <div className="flex flex-row justify-between mb-[25px] mobile-below:mb-[10px]">
                <div className="">Персональное занятие</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">1300р</div>
              </div>
              <div className="flex flex-row justify-between my-[25px] mobile-below:my-[10px]">
                <div className="">Блок на 5 персональных занятий</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">6000р</div>
              </div>
              <div className="flex flex-row justify-between mt-[25px] mobile-below:mt-[10px]">
                <div className="">Сплит (2 человека)</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">1600р</div>
              </div>    
              <div className="w-[2px] h-full right-[121px] bg-[#D11655] absolute mobile-below:right-[79px] mobile-below:w-[1px]"></div>          
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mx-[25px] mobile-below:mx-[0px]">      
          <h3 className="text-[24px] mobile-below:text-[16px] mobile-below:ml-[19px]">Групповые тренировки</h3>
          <div className="flex bg-[#FFFEFE] w-full shadow-md justify-between pl-[32px] mt-[25px] mobile-below:mb-[25px] mobile-below:mt-[15px]">    
            <div className="flex flex-col w-full relative my-[44px] text-[20px] mobile-below:my-[20px] mobile-below:text-[13px]">   
              <div className="flex flex-row justify-between mb-[20px] mobile-below:mb-[10px]">
                <div className="">Разовое посещение</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">600р</div>
              </div>
              <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                <div className="">Абонемент на 4 занятия</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">2200р</div>
              </div>
              <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                <div className="">Абонемент на 8 занятия</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">4000р</div>
              </div>
              <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                <div className="">Подарочный сертификат на 4 занятия</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">2200р</div>
              </div>  
              <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                <div className="">Абонемент на 4 занятия скайл</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">2400р</div>
              </div>
              <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                <div className="">Скайл тренировка разовое</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">750р</div>
              </div>  
              <div className="flex flex-row justify-between my-[20px] mobile-below:my-[10px]">
                <div className="">Подарочный сертификат на 8 занятий</div>
                <div className="w-[105px] mobile-below:w-[79px] text-center">4000р</div>
              </div>
              <div className="flex flex-row justify-between mt-[20px] mobile-below:mt-[10px]">
                <div className="">Мини-группа (3-4 человека)</div>
                <div className="text-center">
                  <p className="w-[105px] mobile-below:w-[79px] text-center">750р</p>
                  <p className="text-[16px] text-[#878787] w-[105px] mobile-below:w-[79px] text-center mobile-below:text-[10px]">(с человека)</p>
                </div>
              </div>    
              <div className="w-[2px] h-full right-[121px] bg-[#D11655] absolute mobile-below:right-[79px] mobile-below:w-[1px]"></div>                     
            </div>            
          </div>
        </div>
      </div>
      <div className="position=absolute ml-[68px] mt-[117px] mb-[59px]">
        <h1 className="text-[44px]">Направления</h1>
      </div>
      <div className="flex ml-[73px] mb-[27px]">
        <h1 className="text-[24px] text-[#D11655]">Функциональные тренировки</h1>
      </div>
      <div className="flex flex-row w-full ml-[36px] gap-[32px]">
        <div className="flex items-center">
          <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 1L2 17L18 33" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="">
          <div className="flex flex-row justify-between">
            <div>BodyArt</div>
            <div>55 минут</div>
          </div>
          <div className="">            
            <img src="http://localhost:5000/files/test yoga.jpg" alt="1" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="absolute w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row justify-between">
            <div>BodyArt</div>
            <div>55 минут</div>
          </div>
          <div className="">            
            <img src="http://localhost:5000/files/test_yoga.png" alt="1" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="absolute w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        
        <div>
          <div className="flex flex-row justify-between">
            <div>Body Skills</div>
            <div>55 минут</div>
          </div>
          <div>
            <img src="http://localhost:5000/files/test_yoga.png" alt="2" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div>Deep Work</div>
            <div>55 минут</div>
          </div>
          <div>
            <img src="http://localhost:5000/files/test_yoga.png" alt="3" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 33L17 17L1 1" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div className="flex ml-[73px] mt-[95px] mb-[27px]">
        <h1 className="text-[24px] text-[#D11655]">Направления Mind&Body</h1>
      </div>
      <div className="flex flex-row w-full ml-[36px] gap-[32px]">
        <div className="flex items-center">
          <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 1L2 17L18 33" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="">
          <div className="flex flex-row justify-between">
            <div>Pilates</div>
            <div>55 минут</div>
          </div>
          <div className="">            
            <img src="http://localhost:5000/files/test_yoga.png" alt="1" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="absolute w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div>Stretch</div>
            <div>55 минут</div>
          </div>
          <div>
            <img src="http://localhost:5000/files/test_yoga.png" alt="2" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div>Йога</div>
            <div>90 минут</div>
          </div>
          <div>
            <img src="http://localhost:5000/files/test_yoga.png" alt="3" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div>Йога</div>
            <div>90 минут</div>
          </div>
          <div>
            <img src="http://localhost:5000/files/test_yoga.png" alt="3" className="rounded-[10px] w-[389px] h-[178px]"></img>
            <button className="w-[128px] h-[40px] text-[#fff] text-[16px] cursor-pointer rounded-[10px] bg-[#D11655]">
              Подробнее
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <svg width="19" height="34" viewBox="0 0 19 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 33L17 17L1 1" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <Shedule />
      <div className="ml-[73px] mt-[110px] mb-[50px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[50px]">
        <h1 className="text-[44px] mobile-below:text-[24px]">Правила посещения</h1>
      </div>
      <div className="flex flex-row">
        <div className="ml-[50px] mb-[90px] ">
          <ul className="list-disc list-[#D11655] text-[19px] text-[#D11655]">
            <li> 
              <div className="text-[#1B1B1B] pb-[10px]">Групповые занятия имеют ограничения по количеству занимающихся.</div>                
            </li>
            <li>
              <div className="text-[#1B1B1B] py-[10px]">Предварительная запись на тренировки осуществляется на сайте студии или по телефону.</div> 
            </li>
            <li>
              <div className="text-[#1B1B1B] py-[10px]">Если Вы записаны и не сможете посетить урок, необходимо обязательно, минимум за 2 часа до начала занятия, выписаться с этого урока, в противном случае, занятие будет списано с вашего абонемента.</div>
            </li>
            <li>
              <div className="text-[#1B1B1B] py-[10px]">В случае опоздания на урок более, чем на 10 минут, инструктор имеет право не допустить клиента до тренировки.</div>
            </li>
            <li>
              <div className="text-[#1B1B1B] pt-[10px]">Во избежание травм настоятельно рекомендуется посещение уроков, соответствующих Вашему уровню подготовленности.</div>
            </li>
          </ul>
        </div>
        <div className="flex items-center w-full">
          <div className="content-center">
            <img src="http://localhost:5000/files/girl.png" width="389" height="387" alt="mainImage" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
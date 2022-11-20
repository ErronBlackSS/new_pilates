import Shedule from '../Components/Shedule'
import useWindowWidth from '../Hooks/UseScreenWidth'
import TrainersSwipe from '../Components/TrainersSwipe'
import Directions from '../Components/Directions'

const Main = () => {
  const windowWidth = useWindowWidth()
  return (
    <>
      <div className="w-[1366px] flex flex-col m-auto mobile-below:w-full">
        <div className="flex mobile-below:flex-col mobile-above:flex-row justify-left">
          <div className="max-w-[500px]">
            <div className="flex flex-col mt-[52px] mobile-below:mt-[0px]">
              <div className="flex flex-row mobile-below:gap-[10px] mobile-below:px-[16px]">
                <div className="flex items-center mobile-below:w-[154px]">
                  <span className="text-[64px] leading-[88px] text-[#1B1B1B] mobile-below:text-[22px] mobile-below:leading-[34px]">
              Студия Екатерины Федоровской
                  </span>
                </div>
                <div className="w-[144px] h-[144px] flex justify-center items-center mobile-above:hidden">
                  <img src="http://localhost:5000/files/girl.png" alt="mainImage" />
                </div>
              </div>
              <div className="w-[434px] mt-[28px] mobile-below:w-[190px] mobile-below:h-[40px] mobile-below:ml-[16px] mobile-below:mt-[0px]">
                <span className="text-[24px] leading-[40px] font-[500] text-[#5C5C5C] mobile-below:text-[14px] mobile-below:leading-[20px]">
              Квалифицированный подход с заботой о Вашем здоровье
                </span>
              </div>
              
              <div className="mt-[52px] mobile-below:px-[16px] mobile-below:mt-[26px]">
                <button className="w-[293px] h-[56px] bg-[#D11655] text-[#FEFAFA] text-[20px] cursor-pointer rounded-[10px] mobile-below:w-[220px] mobile-below:h-[40px] mobile-below:text-[16px]">
              Записаться на занятие
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-[16px]">
            <div className="flex bg-[#FFFEFE] shadow-md mt-[52px] pl-[52px] rounded-[28px] mobile-below:pl-[12px] mobile-below:mt-[27px] mobile-below:rounded-[10px]">
              <ul className="w-full list-none text-[20px] text-[#1B1B1B] mt-[52px] mobile-below:text-[14px] mobile-below:mt-[16px]">
                <li className="pb-[31px] mobile-below:pb-[8px]">Уникальные направления body&mind</li>
                <li className="py-[32px] mobile-below:py-[8px]">Занятия в формате мини-групп</li>
                <li className="py-[32px] mobile-below:py-[8px]">Чистота и свежий воздух</li>
                <li className="pt-[32px] pb-[32px] mobile-below:pt-[8px] mobile-below:pb-[8px]">Заботливые, опытные тренеры</li>
                <li className="pt-[32px] pb-[52px] mobile-below:pt-[8px] mobile-below:pb-[8px]">Абонементы без ограничения сроков</li>
              </ul>         
              <div className="w-full flex items-center mobile-below:hidden">
                <img src="http://localhost:5000/files/girl.png" alt="mainImage" />
              </div>
            </div>
          </div>
        </div>
        <div id="trainers" className="mt-[117px] mb-[65px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[50px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Наши тренеры</h1>
        </div>
        
        <TrainersSwipe />
        <div className="mt-[117px] mb-[69px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[50px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Прайс-лист</h1>
        </div>
        <div className="form-flex gap-[32px] mobile-below:mx-[0px]">      
          <div className="flex flex-col w-full">
            <h2 className="text-[24px] mobile-below:text-[16px] mobile-below:ml-[19px]">Индивидуальные тренировки</h2>
            <div className="flex bg-[#FFFEFE] w-full shadow-md justify-between rounded-[7px] pl-[32px] mt-[25px] mobile-below:mb-[25px] mobile-below:mt-[15px]">    
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
          <div className="flex flex-col w-full">      
            <h3 className="text-[24px] mobile-below:text-[16px] mobile-below:ml-[19px]">Групповые тренировки</h3>
            <div className="flex bg-[#FFFEFE] w-full shadow-md justify-between rounded-[7px] pl-[32px] mt-[25px] mobile-below:mb-[25px] mobile-below:mt-[15px]">    
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
        <div className="mt-[117px] mobile-below:ml-[19px] mobile-below:mt-[50px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Направления</h1>
        </div>
        <Directions />
        <div className="overflow-x-hidden">
          <Shedule />
        </div>

        <div className="mt-[110px] mb-[50px] mobile-below:ml-[19px] mobile-below:mb-[30px] mobile-below:mt-[50px]">
          <h1 className="text-[44px] mobile-below:text-[24px]">Правила посещения</h1>
        </div>
        <div className="flex flex-row w-full">
          <div className="ml-[25px] mobile-below:ml-[32px] mobile-below:mr-[16px]">
            <ul className="w-[672px] list-disc list-[#D11655] text-[19px] text-[#D11655] mobile-below:w-full">
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
          <div className="w-full mobile-below:hidden">
            <div >
              <img className="m-auto" src="http://localhost:5000/files/girl.png" alt="mainImage" />
            </div>
          </div>
        </div>
        <div className="mt-[100px] mb-[44px] mobile-below:mt-[55px] mobile-below:mx-[16px]">
          <h1 className="text-[16px] text-[#464646] ml-[5px] mb-[10px] mobile-below:text-[13px]">улица Свердлова, 26, Ярославль</h1>          
          <iframe title="Карта" className="shadow-md" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad4ed878e0e7a2f1ce4ecff230377877f8cf25bc282569d380d2a761d1f7489d6&amp;source=constructor" width="100%" height="395" frameBorder="0"></iframe>
        </div>
        
      </div>
      <div className="w-full">
        {windowWidth > 768 ? 
          <footer className="bg-[#FFFEFE] md:p-5 dark:bg-gray-800">
            <div className="flex flex-row justify-between w-full px-[55px] mobile-below:flex-col">
              <div className="text-[#D11655]">+7 (905) 636-06-04</div>            
              <div className="text-[#1B1B1B]">© 2022 Copyright Студия Екатерины Федоровской</div>             
              <div>
                <div className="flex flex-row justify-between w-full gap-[30px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1665 1.66652C15.2707 1.66982 16.3286 2.10989 17.1094 2.89064C17.8901 3.67138 18.3302 4.72935 18.3335 5.83348V14.1665C18.3302 15.2707 17.8901 16.3286 17.1094 17.1094C16.3286 17.8901 15.2707 18.3302 14.1665 18.3335H5.83348C4.72935 18.3302 3.67138 17.8901 2.89064 17.1094C2.10989 16.3286 1.66982 15.2707 1.66652 14.1665V5.83348C1.66982 4.72935 2.10989 3.67138 2.89064 2.89064C3.67138 2.10989 4.72935 1.66982 5.83348 1.66652H14.1665ZM14.1665 0H5.83348C2.625 0 0 2.625 0 5.83348V14.1665C0 17.375 2.625 20 5.83348 20H14.1665C17.375 20 20 17.375 20 14.1665V5.83348C20 2.625 17.375 0 14.1665 0Z" fill="#1B1B1B"/>
                    <path d="M15.4165 5.83333C15.1693 5.83333 14.9276 5.76002 14.7221 5.62267C14.5165 5.48532 14.3563 5.2901 14.2617 5.06169C14.1671 4.83328 14.1423 4.58195 14.1905 4.33947C14.2388 4.09699 14.3578 3.87427 14.5326 3.69945C14.7075 3.52463 14.9302 3.40558 15.1727 3.35735C15.4151 3.30912 15.6665 3.33388 15.8949 3.42848C16.1233 3.52309 16.3185 3.68331 16.4559 3.88887C16.5932 4.09443 16.6665 4.33611 16.6665 4.58333C16.6669 4.74759 16.6348 4.91029 16.5721 5.06211C16.5094 5.21392 16.4173 5.35186 16.3012 5.46801C16.185 5.58415 16.0471 5.67621 15.8953 5.7389C15.7435 5.8016 15.5808 5.83369 15.4165 5.83333ZM10 6.66637C10.6593 6.66637 11.3038 6.86188 11.852 7.22816C12.4002 7.59445 12.8274 8.11507 13.0797 8.72418C13.332 9.3333 13.3981 10.0035 13.2694 10.6502C13.1408 11.2968 12.8233 11.8908 12.3571 12.357C11.8909 12.8232 11.297 13.1407 10.6503 13.2693C10.0037 13.3979 9.33345 13.3319 8.72433 13.0796C8.11522 12.8273 7.5946 12.4 7.22831 11.8518C6.86203 11.3036 6.66652 10.6592 6.66652 9.99985C6.66747 9.11605 7.01897 8.26871 7.64392 7.64377C8.26886 7.01882 9.1162 6.66732 10 6.66637ZM10 4.99985C9.0111 4.99985 8.0444 5.2931 7.22215 5.8425C6.39991 6.39191 5.75904 7.1728 5.3806 8.08643C5.00217 9.00006 4.90315 10.0054 5.09608 10.9753C5.289 11.9452 5.76521 12.8361 6.46447 13.5354C7.16373 14.2346 8.05465 14.7109 9.02455 14.9038C9.99446 15.0967 10.9998 14.9977 11.9134 14.6193C12.827 14.2408 13.6079 13.5999 14.1574 12.7777C14.7068 11.9555 15 10.9888 15 9.99985C15 8.67377 14.4732 7.402 13.5355 6.46432C12.5979 5.52664 11.3261 4.99985 10 4.99985Z" fill="#1B1B1B"/>
                    <path d="M15.4165 5.83333C15.1693 5.83333 14.9276 5.76002 14.7221 5.62267C14.5165 5.48532 14.3563 5.2901 14.2617 5.06169C14.1671 4.83328 14.1423 4.58195 14.1905 4.33947C14.2388 4.09699 14.3578 3.87427 14.5326 3.69945C14.7075 3.52463 14.9302 3.40558 15.1727 3.35735C15.4151 3.30912 15.6665 3.33388 15.8949 3.42848C16.1233 3.52309 16.3185 3.68331 16.4559 3.88887C16.5932 4.09443 16.6665 4.33611 16.6665 4.58333C16.6669 4.74759 16.6348 4.91029 16.5721 5.06211C16.5094 5.21392 16.4173 5.35186 16.3012 5.46801C16.185 5.58415 16.0471 5.67621 15.8953 5.7389C15.7435 5.8016 15.5808 5.83369 15.4165 5.83333ZM10 6.66637C10.6593 6.66637 11.3038 6.86188 11.852 7.22816C12.4002 7.59445 12.8274 8.11507 13.0797 8.72418C13.332 9.3333 13.3981 10.0035 13.2694 10.6502C13.1408 11.2968 12.8233 11.8908 12.3571 12.357C11.8909 12.8232 11.297 13.1407 10.6503 13.2693C10.0037 13.3979 9.33345 13.3319 8.72433 13.0796C8.11522 12.8273 7.5946 12.4 7.22831 11.8518C6.86203 11.3036 6.66652 10.6592 6.66652 9.99985C6.66747 9.11605 7.01897 8.26871 7.64392 7.64377C8.26886 7.01882 9.1162 6.66732 10 6.66637ZM10 4.99985C9.0111 4.99985 8.0444 5.2931 7.22215 5.8425C6.39991 6.39191 5.75904 7.1728 5.3806 8.08643C5.00217 9.00006 4.90315 10.0054 5.09608 10.9753C5.289 11.9452 5.76521 12.8361 6.46447 13.5354C7.16373 14.2346 8.05465 14.7109 9.02455 14.9038C9.99446 15.0967 10.9998 14.9977 11.9134 14.6193C12.827 14.2408 13.6079 13.5999 14.1574 12.7777C14.7068 11.9555 15 10.9888 15 9.99985C15 8.67377 14.4732 7.402 13.5355 6.46432C12.5979 5.52664 11.3261 4.99985 10 4.99985Z" fill="#1B1B1B"/>
                  </svg>
                  <svg className="mt-[3px]"  width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.9586 0.972222C23.1292 0.423889 22.9586 0.0252776 22.2039 0.0252776H19.6945C19.0615 0.0252776 18.7692 0.374305 18.5986 0.747639C18.5986 0.747639 17.3078 3.93653 15.5051 6.00396C14.9205 6.60187 14.6527 6.80118 14.336 6.80118C14.1654 6.80118 13.9459 6.60187 13.9459 6.05403V0.946458C13.9459 0.298958 13.7514 0 13.2152 0H9.26876C8.87872 0 8.6353 0.298958 8.6353 0.597917C8.6353 1.22063 9.53662 1.37035 9.63389 3.11403V6.90278C9.63389 7.72479 9.49014 7.875 9.17101 7.875C8.31857 7.875 6.24809 4.66132 5.00609 0.999444C4.76459 0.274167 4.51926 0 3.8858 0H1.35244C0.621709 0 0.5 0.348542 0.5 0.722361C0.5 1.39514 1.35244 4.78285 4.47038 9.26674C6.54086 12.3292 9.48822 13.9752 12.1433 13.9752C13.7514 13.9752 13.9459 13.6014 13.9459 12.9787V10.6619C13.9459 9.91472 14.0921 9.79028 14.6038 9.79028C14.9689 9.79028 15.6268 9.9891 17.1127 11.4591C18.8176 13.2028 19.1099 14 20.0601 14H22.569C23.2997 14 23.6409 13.6262 23.4459 12.9038C23.2269 12.1815 22.3984 11.1353 21.3265 9.88993C20.7419 9.19285 19.8651 8.42042 19.5972 8.0466C19.2321 7.54833 19.3294 7.34903 19.5972 6.90083C19.5728 6.90083 22.6423 2.46653 22.9586 0.970278" fill="#1B1B1B"/>
                  </svg>
                </div>
              </div>
            </div>
          </footer>
          : 
          <footer className="bg-[#FFFEFE] md:p-5 dark:bg-gray-800">          
            <div className="flex flex-col justify-center items-center w-full px-[23px] py-[20px] gap-[14px]">
              <div>
                <div className="flex flex-row w-full gap-[30px]">
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1665 1.66652C15.2707 1.66982 16.3286 2.10989 17.1094 2.89064C17.8901 3.67138 18.3302 4.72935 18.3335 5.83348V14.1665C18.3302 15.2707 17.8901 16.3286 17.1094 17.1094C16.3286 17.8901 15.2707 18.3302 14.1665 18.3335H5.83348C4.72935 18.3302 3.67138 17.8901 2.89064 17.1094C2.10989 16.3286 1.66982 15.2707 1.66652 14.1665V5.83348C1.66982 4.72935 2.10989 3.67138 2.89064 2.89064C3.67138 2.10989 4.72935 1.66982 5.83348 1.66652H14.1665ZM14.1665 0H5.83348C2.625 0 0 2.625 0 5.83348V14.1665C0 17.375 2.625 20 5.83348 20H14.1665C17.375 20 20 17.375 20 14.1665V5.83348C20 2.625 17.375 0 14.1665 0Z" fill="#1B1B1B"/>
                    <path d="M15.4165 5.83333C15.1693 5.83333 14.9276 5.76002 14.7221 5.62267C14.5165 5.48532 14.3563 5.2901 14.2617 5.06169C14.1671 4.83328 14.1423 4.58195 14.1905 4.33947C14.2388 4.09699 14.3578 3.87427 14.5326 3.69945C14.7075 3.52463 14.9302 3.40558 15.1727 3.35735C15.4151 3.30912 15.6665 3.33388 15.8949 3.42848C16.1233 3.52309 16.3185 3.68331 16.4559 3.88887C16.5932 4.09443 16.6665 4.33611 16.6665 4.58333C16.6669 4.74759 16.6348 4.91029 16.5721 5.06211C16.5094 5.21392 16.4173 5.35186 16.3012 5.46801C16.185 5.58415 16.0471 5.67621 15.8953 5.7389C15.7435 5.8016 15.5808 5.83369 15.4165 5.83333ZM10 6.66637C10.6593 6.66637 11.3038 6.86188 11.852 7.22816C12.4002 7.59445 12.8274 8.11507 13.0797 8.72418C13.332 9.3333 13.3981 10.0035 13.2694 10.6502C13.1408 11.2968 12.8233 11.8908 12.3571 12.357C11.8909 12.8232 11.297 13.1407 10.6503 13.2693C10.0037 13.3979 9.33345 13.3319 8.72433 13.0796C8.11522 12.8273 7.5946 12.4 7.22831 11.8518C6.86203 11.3036 6.66652 10.6592 6.66652 9.99985C6.66747 9.11605 7.01897 8.26871 7.64392 7.64377C8.26886 7.01882 9.1162 6.66732 10 6.66637ZM10 4.99985C9.0111 4.99985 8.0444 5.2931 7.22215 5.8425C6.39991 6.39191 5.75904 7.1728 5.3806 8.08643C5.00217 9.00006 4.90315 10.0054 5.09608 10.9753C5.289 11.9452 5.76521 12.8361 6.46447 13.5354C7.16373 14.2346 8.05465 14.7109 9.02455 14.9038C9.99446 15.0967 10.9998 14.9977 11.9134 14.6193C12.827 14.2408 13.6079 13.5999 14.1574 12.7777C14.7068 11.9555 15 10.9888 15 9.99985C15 8.67377 14.4732 7.402 13.5355 6.46432C12.5979 5.52664 11.3261 4.99985 10 4.99985Z" fill="#1B1B1B"/>
                    <path d="M15.4165 5.83333C15.1693 5.83333 14.9276 5.76002 14.7221 5.62267C14.5165 5.48532 14.3563 5.2901 14.2617 5.06169C14.1671 4.83328 14.1423 4.58195 14.1905 4.33947C14.2388 4.09699 14.3578 3.87427 14.5326 3.69945C14.7075 3.52463 14.9302 3.40558 15.1727 3.35735C15.4151 3.30912 15.6665 3.33388 15.8949 3.42848C16.1233 3.52309 16.3185 3.68331 16.4559 3.88887C16.5932 4.09443 16.6665 4.33611 16.6665 4.58333C16.6669 4.74759 16.6348 4.91029 16.5721 5.06211C16.5094 5.21392 16.4173 5.35186 16.3012 5.46801C16.185 5.58415 16.0471 5.67621 15.8953 5.7389C15.7435 5.8016 15.5808 5.83369 15.4165 5.83333ZM10 6.66637C10.6593 6.66637 11.3038 6.86188 11.852 7.22816C12.4002 7.59445 12.8274 8.11507 13.0797 8.72418C13.332 9.3333 13.3981 10.0035 13.2694 10.6502C13.1408 11.2968 12.8233 11.8908 12.3571 12.357C11.8909 12.8232 11.297 13.1407 10.6503 13.2693C10.0037 13.3979 9.33345 13.3319 8.72433 13.0796C8.11522 12.8273 7.5946 12.4 7.22831 11.8518C6.86203 11.3036 6.66652 10.6592 6.66652 9.99985C6.66747 9.11605 7.01897 8.26871 7.64392 7.64377C8.26886 7.01882 9.1162 6.66732 10 6.66637ZM10 4.99985C9.0111 4.99985 8.0444 5.2931 7.22215 5.8425C6.39991 6.39191 5.75904 7.1728 5.3806 8.08643C5.00217 9.00006 4.90315 10.0054 5.09608 10.9753C5.289 11.9452 5.76521 12.8361 6.46447 13.5354C7.16373 14.2346 8.05465 14.7109 9.02455 14.9038C9.99446 15.0967 10.9998 14.9977 11.9134 14.6193C12.827 14.2408 13.6079 13.5999 14.1574 12.7777C14.7068 11.9555 15 10.9888 15 9.99985C15 8.67377 14.4732 7.402 13.5355 6.46432C12.5979 5.52664 11.3261 4.99985 10 4.99985Z" fill="#1B1B1B"/>
                  </svg>
                  <svg className="mt-[3px]"  width="17" height="10" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M22.9586 0.972222C23.1292 0.423889 22.9586 0.0252776 22.2039 0.0252776H19.6945C19.0615 0.0252776 18.7692 0.374305 18.5986 0.747639C18.5986 0.747639 17.3078 3.93653 15.5051 6.00396C14.9205 6.60187 14.6527 6.80118 14.336 6.80118C14.1654 6.80118 13.9459 6.60187 13.9459 6.05403V0.946458C13.9459 0.298958 13.7514 0 13.2152 0H9.26876C8.87872 0 8.6353 0.298958 8.6353 0.597917C8.6353 1.22063 9.53662 1.37035 9.63389 3.11403V6.90278C9.63389 7.72479 9.49014 7.875 9.17101 7.875C8.31857 7.875 6.24809 4.66132 5.00609 0.999444C4.76459 0.274167 4.51926 0 3.8858 0H1.35244C0.621709 0 0.5 0.348542 0.5 0.722361C0.5 1.39514 1.35244 4.78285 4.47038 9.26674C6.54086 12.3292 9.48822 13.9752 12.1433 13.9752C13.7514 13.9752 13.9459 13.6014 13.9459 12.9787V10.6619C13.9459 9.91472 14.0921 9.79028 14.6038 9.79028C14.9689 9.79028 15.6268 9.9891 17.1127 11.4591C18.8176 13.2028 19.1099 14 20.0601 14H22.569C23.2997 14 23.6409 13.6262 23.4459 12.9038C23.2269 12.1815 22.3984 11.1353 21.3265 9.88993C20.7419 9.19285 19.8651 8.42042 19.5972 8.0466C19.2321 7.54833 19.3294 7.34903 19.5972 6.90083C19.5728 6.90083 22.6423 2.46653 22.9586 0.970278" fill="#1B1B1B"/>
                  </svg>
                </div>
              </div>
              <div className="text-[#D11655] text-[11px]">+7 (905) 636-06-04</div>            
              <div className="text-[#1B1B1B] text-[11px]">© 2022 Copyright Студия Екатерины Федоровской</div>             
            </div>
          </footer>}
      </div>
    </>
  )
}

export default Main
import React from 'react'

const TopButtons = () => {
  return (
    <div className="flex w-full flex-row justify-between items-center ">
      <div className="flex flex-row justify-center items-center mx-[20px]">
        <button
          className="px-[16px] py-[4px] cursor-pointer rounded-[10px] bg-white"
          style={{border: '1px solid #1B1B1B'}}
        >
        Фильтры
        </button>
      </div>
      <div className="flex flex-row justify-center items-center gap-[20px]">
        <button
          className="px-[16px] py-[4px] cursor-pointer rounded-[10px] bg-white"
          style={{border: '1px solid #1B1B1B'}}
        >
          Следующая неделя
        </button>  
        <button
          className="px-[16px] py-[4px] cursor-pointer rounded-[10px] bg-white"
          style={{border: '1px solid #1B1B1B'}}
        >
          Предыдущая неделя
        </button>  
      </div>     
    </div>
  )
}

export default TopButtons
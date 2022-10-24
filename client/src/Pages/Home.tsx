const Main = () => {
  return (
    <div className="flex flex-row justify-left mx-[68px]">
      <div className="max-w-[500px]">
        <div className="flex flex-col">
          <div className="mt-[52px]">
            <span className="text-[64px] leading-[88px] text-[#1B1B1B]">
              Студия Екатерины Федоровской
            </span>
          </div>
          <div className="mt-[28px]">
            <span className="text-[24px] leading-[40px] text-[#575C68]">
              Квалифицированный подход с заботой о Вашем здоровье
            </span>
          </div>
          <div className="mt-[52px]">
            <button className="px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] bg-bordo">
              Записаться на занятие
            </button>
          </div>
        </div>
      </div>
      <div className="w-[100%]">
        <div className="flex bg-white shadow-md m-[52px] p-[30px]">
          <ul className="list-none text-[20px] gap-[20px]">
            <li className="py-[31px]">Уникальные направления body&mind</li>
            <li className="py-[31px]">Занятия в формате мини-групп</li>
            <li className="py-[31px]">Чистота и свежий воздух</li>
            <li className="py-[31px]">Заботливые, опытные тренеры</li>
            <li className="py-[31px]">Абонементы без ограничения сроков</li>
          </ul>
        </div>
        <div>
          <img src="../girl.png" alt="mainImage" />
        </div>
      </div>
    </div>
  )
}

export default Main
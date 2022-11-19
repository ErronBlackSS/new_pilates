import { FC } from 'react'
import ListRowBlock from '../Common/List/ListRowBlock'

interface ILessonRow {
  title: string
  trainer: string
  date: string
  start_time: string
  end_time: string
  id: number
}

const LessonsRow: FC<ILessonRow> = ({title, trainer, date, start_time, end_time}) => {

  const formattedDate = new Date(date).toLocaleString('ru', {
    month: 'long',
    day: 'numeric'
  })

  return (
    <div
      className="border-t border-[#D9D9DA] flex flex-row justify-between items-center p-[10px]"
    >
      <div className="flex flex-row justifty-between items-center gap-[20px]">
        <ListRowBlock
          label="Название:"
          value={title}
        />
        <ListRowBlock
          label="Тренер:"
          value={trainer}
        />
        <ListRowBlock
          label="Дата:"
          value={formattedDate}
        />
        <ListRowBlock
          label="Время начала:"
          value={start_time}
        />
        <ListRowBlock
          label="Время окончания:"
          value={end_time}
        />
      </div>
      <div className="flex flex-row justifty-center items-center gap-[30px]">
        <button className="px-6 py-2 text-[#fff] cursor-pointer rounded-[10px] bg-bordo">
            123
        </button>
        <button className="px-6 py-2 text-[#fff] cursor-pointer rounded-[10px] bg-bordo">
            123
        </button>
        <button className="px-6 py-2 text-[#fff] cursor-pointer rounded-[10px] bg-bordo">
            123
        </button>
      </div>
    </div>
  )
}

export default LessonsRow
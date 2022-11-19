import { FC } from 'react'
import ListRowBlock from '../Common/List/ListRowBlock'
import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'

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
        <Button
          color={ButtonColors.white}
          className="py-[2px] px-[14px]"
          handler={() => { console.log('edit') }}
        >
            Записи
        </Button>
        <Button
          color={ButtonColors.white}
          className="py-[2px] px-[14px]"
          handler={() => { console.log('edit') }}
        >
            Изменить
        </Button>
        <Button
          color={ButtonColors.red}
          className="py-[2px] px-[14px]"
          handler={() => { console.log('delete') }}
        >
            Удалить
        </Button>
      </div>
    </div>
  )
}

export default LessonsRow
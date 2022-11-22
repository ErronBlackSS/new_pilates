import { FC, useContext } from 'react'
import ListRowBlock from '../Common/List/ListRowBlock'
import { Context } from '../../index'
import { ROLES } from '../../Utils/constance'
import AdminRowButtonGroup from './AdminRowButtonGroup'
import UserRowButtonGroup from './UserRowButtonGroup'

interface ILessonRow {
  title: string
  trainer: string
  date: string
  start_time: string
  end_time: string
  id: number
}

const LessonsRow: FC<ILessonRow> = ({title, trainer, date, start_time, end_time}) => {

  const { user } = useContext(Context)

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
        {user.user.role === ROLES.ADMIN ? <AdminRowButtonGroup /> : <UserRowButtonGroup />}
      </div>
    </div>
  )
}

export default LessonsRow
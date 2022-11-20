import { FC, useState } from 'react'
import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import LessonsStore from '../../Store/LessonsStore'

const FilterButtons: FC = () => {
  
  const [active, setActive] = useState(0)

  const onClick = (index, item) => {
    if (active === index) return
    setActive(index)
    item.handler()
  }

  const buttons = [
    {
      content: 'На этой неделе',
      handler: () => { LessonsStore.getLessonsCurrentWeek() },
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    },
    {
      content: 'Запланированные',
      handler: () => { LessonsStore.getAdminPlannedLessons() },
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    },
    {
      content: 'История',
      handler: () => { LessonsStore.getAllLessons() },
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    }
  ]

  return (
    <div className="flex justify-center items-center gap-[25px]">
      {buttons.map((item, index) => (
        <Button
          key={index}
          handler={() => { onClick(index, item) }}
          color={active === index ? ButtonColors.bordo : item.color}
          className={item.className}
        >
          {item.content}
        </Button>
      ))}
    </div>
  )
}

export default FilterButtons
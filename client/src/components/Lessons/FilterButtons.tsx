import { FC, useState } from 'react'
import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'
import LessonsStore from '../../Store/LessonsStore'
import { ROLES } from '../../Utils/constance'

const FilterButtons = ({ role, userId }) => {
  
  const [active, setActive] = useState(0)

  const currentWeekHandler = () => {
    switch (role) {
    case ROLES.USER:
      LessonsStore.getUserPlannedLessons(userId)
      break
    case ROLES.COACH:
      LessonsStore.getUserPlannedLessons(userId)
      break
    case ROLES.ADMIN:
      LessonsStore.getLessonsCurrentWeek()
      break
    default:
      LessonsStore.getUserPlannedLessons(userId)
    }
  }

  const plannedHandler = () => {
    switch (role) {
    case ROLES.USER:
      LessonsStore.getUserPlannedLessons(userId)
      break
    case ROLES.COACH:
      LessonsStore.getUserPlannedLessons(userId)
      break
    case ROLES.ADMIN:
      LessonsStore.getAdminPlannedLessons()
      break
    default:
      LessonsStore.getUserPlannedLessons(userId)
    }
  }

  const historyHandler = () => {
    switch (role) {
    case ROLES.USER:
      LessonsStore.getUserHistoryLessons(userId)
      break
    case ROLES.COACH:
      LessonsStore.getUserHistoryLessons(userId)
      break
    case ROLES.ADMIN:
      LessonsStore.getAllLessons()
      break
    default:
      LessonsStore.getUserHistoryLessons(userId)
    }
  }

  const onClick = (index, item) => {
    if (active === index) return
    setActive(index)
    item.handler()
  }

  const getButtons = (role) => {
    if(role === ROLES.ADMIN) {
      return [
        {
          content: 'На этой неделе',
          handler: currentWeekHandler,
          className: 'py-[2px] px-[14px]',
          color: ButtonColors.white
        },
        {
          content: 'Запланированные',
          handler: plannedHandler,
          className: 'py-[2px] px-[14px]',
          color: ButtonColors.white
        },
        {
          content: 'История',
          handler: historyHandler,
          className: 'py-[2px] px-[14px]',
          color: ButtonColors.white
        }
      ]
    } else if(role === ROLES.USER) {
      return [
        {
          content: 'Будущие',
          handler: plannedHandler,
          className: 'py-[2px] px-[14px]',
          color: ButtonColors.white
        },
        {
          content: 'История',
          handler: historyHandler,
          className: 'py-[2px] px-[14px]',
          color: ButtonColors.white
        }
      ]
    }
  }

  const buttons = getButtons(role)

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
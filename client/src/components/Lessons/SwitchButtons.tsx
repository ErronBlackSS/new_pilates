import { FC, useState } from 'react'
import Button from '../Common/Button'
import IconShedule from '../Common/Icons/IconShedule'
import IconList from '../Common/Icons/IconList'
import { ButtonColors } from '../../Utils/constance'

const FilterButtons: FC = () => {

  const [active, setActive] = useState(0)

  const handlerClick = (index: number) => {
    setActive(index)
  }

  const getContent = (index: number) => {
    switch (index) {
    case 0:
      return <IconShedule color={index === active ? 'white' : '#1B1B1B'}/>
    case 1:
      return <IconList color={index === active ? 'white' : '#1B1B1B'}/>
    default:
      return <IconShedule color={index === active ? 'white' : '#1B1B1B'}/>
    }
  }

  const buttons = [
    {
      content: () => getContent(0),
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    },
    {
      content: () => getContent(1),
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    },
  ]

  return (
    <div className="flex justify-center items-center gap-[25px]">
      {buttons.map((item, index) => (
        <Button
          key={index}
          handler={() => { handlerClick(index) }}
          color={active === index ? ButtonColors.bordo : item.color}
          className={item.className}
        >
          {item.content()}
        </Button>
      ))}
    </div>
  )
}

export default FilterButtons

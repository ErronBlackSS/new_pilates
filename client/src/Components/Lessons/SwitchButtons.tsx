import { FC, useState } from 'react'
import Button from '../Common/Button'
import IconShedule from '../Common/Icons/IconShedule'
import IconList from '../Common/Icons/IconList'
import { ButtonColors } from '../../Utils/constance'

interface ISwitchButtons {
  onSwitch: any
}

const SwitchButtons: FC<ISwitchButtons> = ({onSwitch}) => {

  const [active, setActive] = useState(0)

  const handlerClick = (index: number) => {
    setActive(index)
    onSwitch(buttons[index].view)
  }

  const getContent = (index: number) => {
    switch (index) {
    case 0:
      return <IconList color={index === active ? 'white' : '#1B1B1B'}/>
    case 1:
      return <IconShedule color={index === active ? 'white' : '#1B1B1B'}/>
    default:
      return <IconShedule color={index === active ? 'white' : '#1B1B1B'}/>
    }
  }

  const buttons = [
    {
      content: () => getContent(0),
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white,
      view: 'list'
    },
    {
      content: () => getContent(1),
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white,
      view: 'shedule'
    }
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

export default SwitchButtons

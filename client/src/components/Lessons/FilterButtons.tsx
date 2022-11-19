import { FC, useState } from 'react'
import Button from '../Common/Button'
import { ButtonColors } from '../../Utils/constance'

const FilterButtons: FC = () => {
  
  const [active, setActive] = useState(0)

  const onClick = (index: number) => {
    setActive(index)  
  }

  const buttons = [
    {
      content: 'На этой неделе',
      // handler: onClick,
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    },
    {
      content: 'Запланированные',
      // handler: onClick,
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    },
    {
      content: 'История',
      // handler: () => { onClick(index) },
      className: 'py-[2px] px-[14px]',
      color: ButtonColors.white
    }
  ]

  return (
    <div className="flex justify-center items-center gap-[25px]">
      {buttons.map((item, index) => (
        <Button
          key={index}
          handler={() => { onClick(index) }}
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
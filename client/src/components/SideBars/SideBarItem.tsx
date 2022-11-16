import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ISideBarItem {
  title: string
  path: string
  isToggled: boolean
  icon: any
}

const SideBarItem: FC<ISideBarItem> = ({ title, path, isToggled, icon }) => {
  return (
    <Link
      to={path}
      className="w-full"
    >
      <div className={'w-full flex flex-row gap-[10px] ' + (isToggled ? ' border py-[5px] px-[20px] rounded-[6px] justify-start' : ' justify-center')}>
        {icon()}
        {isToggled && <span>
          {title}
        </span>}
      </div>
    </Link>      
  )
}

export default SideBarItem
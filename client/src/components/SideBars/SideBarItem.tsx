import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ISideBarItem {
  title: string
  path: string
  isToggled: boolean
  icon: any
  setSelected: (path: string) => void
  selected: string
}

const SideBarItem: FC<ISideBarItem> = ({ title, path, isToggled, icon, setSelected, selected }) => {

  const SideBarClasses = 'w-full flex flex-row gap-[10px] '
    + (isToggled ? ' border py-[8px] px-[20px] rounded-[6px] justify-start' : ' justify-center ')
    + (selected === path ? ' bg-bordo text-[#FFF]' : '')
  return (
    <Link
      to={path}
      className="w-full"
      onClick={() => setSelected(path)}
    >
      <div className={SideBarClasses}>
        {icon()}
        {isToggled && <span>
          {title}
        </span>}
      </div>
    </Link>      
  )
}

export default SideBarItem
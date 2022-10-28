import { FC } from 'react'
import { Link } from 'react-router-dom'

interface ISideBarItem {
  title: string
  path: string
}

const SideBarItem: FC<ISideBarItem> = ({ title, path }) => {
  return (
    <Link to={path}> 
      {title}
    </Link>      
  )
}

export default SideBarItem
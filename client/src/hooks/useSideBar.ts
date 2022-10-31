import { MutableRefObject, useEffect, useState } from 'react'
import { ROLES } from '../utils/constance'
import { SIDEBAR_ITEMS } from '../utils/navbar_constants'

export const useSideBar = (iconRef: MutableRefObject<any>, bodyRef: MutableRefObject<any>, role) => {
    
  const [isToggled, setToggled] = useState(false)
  const [menuItems, setMenuItems] = useState([])
  
  useEffect(() => {
    switch (role) {
    case ROLES.USER:
      setMenuItems(SIDEBAR_ITEMS.USER)
      break
    case ROLES.COACH:
      setMenuItems(SIDEBAR_ITEMS.COACH)
      break
    case ROLES.ADMIN:
      setMenuItems(SIDEBAR_ITEMS.ADMIN)
      break
    default:
      setMenuItems([])
    }
  }, [role])

  const toggle = () => {
    setToggled(!isToggled)
    
    if (!isToggled) {
      console.log(bodyRef.current)
      iconRef.current.classList.add('transform', 'rotate-180')
      bodyRef.current.classList.add('!w-[200px]')
    } else {
      iconRef.current.classList.remove('transform', 'rotate-180')
      bodyRef.current.classList.remove('!w-[200px]')
    }
  }

  return {
    toggle,
    isToggled,
    menuItems
  }
}
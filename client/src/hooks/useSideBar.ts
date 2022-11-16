import { MutableRefObject, useEffect, useState } from 'react'
import { ROLES } from '../Utils/constance'
import { SIDEBAR_ITEMS } from '../Utils/navbar_constants'
import { useOnClickOutside } from './UseClickOutside'

export const useSideBar = (iconRef: MutableRefObject<any>, bodyRef: MutableRefObject<any>, role: string) => {
    
  const [isToggled, setToggled] = useState(false)
  const [menuItems, setMenuItems] = useState([])

  const toggle = () => {
    setToggled(!isToggled)
    
    if (!isToggled) {
      iconRef.current.classList.add('transform', 'rotate-180')
      bodyRef.current.classList.add('!w-[250px]')
    } else {
      iconRef.current.classList.remove('transform', 'rotate-180')
      bodyRef.current.classList.remove('!w-[250px]')
    }
  }

  const close = () => {
    setToggled(false)
    iconRef.current.classList.remove('transform', 'rotate-180')
    bodyRef.current.classList.remove('!w-[250px]')
  }

  useOnClickOutside(bodyRef, close)

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

  return {
    toggle,
    isToggled,
    menuItems
  }
}

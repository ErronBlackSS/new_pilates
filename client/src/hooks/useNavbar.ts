import { useContext, useState } from 'react'
import { Context } from '../index'
import { ROLES } from '../Utils/constance'
import { SIDEBAR_ITEMS } from '../Utils/navbar_constants'

export const useNavbar = () => {

  const { user } = useContext(Context)
  const [menuItems, setMenuItems] = useState([])

  switch (user.user.role) {
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
  
  return {
    menuItems
  }
}
import {FC} from 'react'
import AccountNavBar from '../Header/NavBars/AccountNavBar'
import MainNavBar from '../Header/NavBars/MainNavBar'

const Header: FC = () => {
  if (window.location.pathname === '/account') {
    return (
      <AccountNavBar />
    )
  } else {
    return (
      <MainNavBar />
    )
  }
}

export default Header
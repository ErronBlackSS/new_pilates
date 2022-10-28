import { Outlet, useNavigate } from 'react-router-dom'
import MobileView from './MobileView'
import DesktopView from './DesktopView'

const MainNavBar = () => {

  const navigate = useNavigate()

  const redirectToMain = () => {
    navigate('/')
  }

  return (
    <>
      <DesktopView redirectToMain={redirectToMain}/>
      <MobileView redirectToMain={redirectToMain}/>
      <Outlet />
    </>
  )
}

export default MainNavBar
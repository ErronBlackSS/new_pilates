import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const AuthLink = () => {

  const { user } = useContext(Context)

  if (user.isAuth) {
    return (
      <Link
        className="nav-link block lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        to="/account" 
      >
        {user.user.name}
      </Link>
    )
  } else {
    return (
      <Link
        className="nav-link block lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        to="/login" 
      >
        Вход
      </Link>
    )
  }
}

export default observer(AuthLink)
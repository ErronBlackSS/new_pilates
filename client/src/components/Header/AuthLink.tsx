import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { useContext } from 'react'

const AuthLink = () => {

  const { user } = useContext(Context)

  if (user.isAuth) {
    return (
      <a 
        className="nav-link block lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        href="/account" 
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        {user.user.name}
      </a>
    )
  } else {
    return (
      <a 
        className="nav-link block lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
        href="/login" 
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Вход
      </a>
    )
  }
}

export default observer(AuthLink)
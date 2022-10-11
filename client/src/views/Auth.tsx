import RegistrationForm from '../components/RegistrationForm'
import LoginForm from '../components/LoginForm'
import { useContext, FC } from 'react'
import { Context } from '../index'

const Auth: FC = () => {

  const { user } = useContext(Context)

  if (!user.isAuth) {
    return (
      <div>
        <LoginForm />
      </div>
    )
  }

  return (
    <div>
      <RegistrationForm />
    </div>
  )
}

export default Auth

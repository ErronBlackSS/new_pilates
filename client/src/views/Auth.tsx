import RegistrationForm from '../components/Auth/RegistrationForm'
import LoginForm from '../components/Auth/LoginForm'
import { useState, FC } from 'react'

const Auth: FC = () => {

  const [switchType, SetSwitchType] = useState<string>('login')

  const switchToRegistration = () => {
    SetSwitchType('registration')
  }

  const switchToLogin = () => {
    SetSwitchType('login')
  }

  switch (switchType) {
  case 'login':
    return (
      <div>
        <LoginForm
          switchToRegistration={switchToRegistration}
        />
      </div>
    )
  case 'registration':
    return (
      <div>
        <RegistrationForm
          switchToLogin={switchToLogin}
        />
      </div>
    )
  default:
    return (
      <div>
          Error
      </div>
    )
  }
}

export default Auth

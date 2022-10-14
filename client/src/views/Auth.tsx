import RegistrationForm from '../components/Auth/RegistrationForm'
import LoginForm from '../components/Auth/LoginForm'
import { useState } from 'react'

const Auth = () => {

  const [switchType, SetSwitchType] = useState<string>('login')

  const switchToRegistration = (): void => {
    SetSwitchType('registration')
  }

  const switchToLogin = (): void => {
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

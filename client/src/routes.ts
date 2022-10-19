import { ROUTES } from './utils/constance'
import Home from './views/Home'
import Account from './views/Account'
import Login from './views/Login'
import Registration from './views/Registration'
import Reset from './views/Reset'
import ResetSend from './views/ResetSend'

export const AUTH_ROUTES = [
  {
    PATH: ROUTES.ACCOUNT,
    COMPONENT: Account
  }
]

export const PUBLIC_ROUTES = [
  {
    PATH: ROUTES.MAIN,
    COMPONENT: Home
  }
]

export const SIGN_IN_ROUTES = [
  {
    PATH: ROUTES.REGISTRATION,
    COMPONENT: Registration
  },
  {
    PATH: ROUTES.LOGIN,
    COMPONENT: Login
  },
  {
    PATH: ROUTES.RESET,
    COMPONENT: Reset
  },
  {
    PATH: ROUTES.RESET_PASSWORD,
    COMPONENT: ResetSend
  }
]
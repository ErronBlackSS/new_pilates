import { ROUTES } from './utils/constance'
import Home from './Pages/Home'
import Account from './Pages/Account'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Reset from './Pages/Reset'
import ResetSend from './Pages/ResetSend'
import Settings from './Pages/Settings'
import Lessons from './Pages/Lessons'

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

export const USER_ACCOUNT_ROUTES = [
  {
    PATH: ROUTES.SETTINGS,
    COMPONENT: Settings
  },
  {
    PATH: ROUTES.MY_LESSONS,
    COMPONENT: Lessons
  },
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
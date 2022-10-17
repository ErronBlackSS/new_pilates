import { ROUTES } from './utils/constance'
import Home from './views/Home'
import Account from './views/Account'
import Auth from './views/Auth'

export const AUTH_ROUTES = [
  {
    PATH: ROUTES.ACCOUNT_ROUTE,
    COMPONENT: Account
  }
]

export const PUBLIC_ROUTES = [
  {
    PATH: ROUTES.MAIN_ROUTE,
    COMPONENT: Home
  }
]
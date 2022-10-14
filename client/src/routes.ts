import React from 'react'
import { ROUTES } from './utils/constance'

const Home = React.lazy(() => import('./views/Home'))
const Auth = React.lazy(() => import('./views/Auth'))
const Account = React.lazy(() => import('./views/Account'))

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
  },
  {
    PATH: ROUTES.AUTH_ROUTE,
    COMPONENT: Auth
  }
]
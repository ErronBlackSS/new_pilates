import React from 'react'
import { ROUTES } from './utils/constance'

const Home = React.lazy(() => import('./views/Home'))
const Auth = React.lazy(() => import('./views/Auth'))
const Account = React.lazy(() => import('./views/Account'))

export const AuthRoutes = [
  {
    path: ROUTES.ACCOUNT_ROUTE,
    Component: Account
  }
]

export const PublicRoutes = [
  {
    path: ROUTES.MAIN_ROUTE,
    Component: Home
  },
  {
    path: ROUTES.AUTH_ROUTE,
    Component: Auth
  }
]
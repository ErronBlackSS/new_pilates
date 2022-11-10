import { ROUTES } from './Utils/constance'
import Home from './Pages/Home'
import Account from './Pages/Account'
import Login from './Pages/Login'
import Registration from './Pages/Registration'
import Reset from './Pages/Reset'
import ResetSend from './Pages/ResetSend'
import Settings from './Pages/Settings'
import LessonsAdmin from './Pages/LessonsAdmin'
import Users from './Pages/Users'
import Directions from './Pages/Directions'
import LessonTypes from './Pages/LessonTypes'
import TrainersAdmin from './Pages/TrainersAdmin'
import Lessons from './Pages/Directions'

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

export const ADMIN_ROUTES = [
  {
    PATH: ROUTES.SETTINGS,
    COMPONENT: Settings
  },
  {
    PATH: ROUTES.MY_LESSONS,
    COMPONENT: LessonsAdmin
  },
  {
    PATH: ROUTES.USERS,
    COMPONENT: Users
  },
  {
    PATH: ROUTES.DIRECTIONS,
    COMPONENT: Directions
  },
  {
    PATH: ROUTES.LESSON_TYPES,
    COMPONENT: LessonTypes
  },
  {
    PATH: ROUTES.TRAINERS,
    COMPONENT: TrainersAdmin
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
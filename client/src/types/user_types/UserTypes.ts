export interface UserInterface {
  email: string
  id: number
  is_activated: boolean
  name: string
  lastname: string
}

export interface LoginInterface {
  email: string
  password: string
}

export interface UserState {
  user: UserInterface
  isAuth: boolean
  isLoading: boolean
  error: null | string
}

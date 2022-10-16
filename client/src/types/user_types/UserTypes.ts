export interface UserInterface {
  email: string
  id: number
  isActivated: boolean
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

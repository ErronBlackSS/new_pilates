import { UserInterface } from '../user_types/UserTypes'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: UserInterface
}

export interface ResetResponse {
  message: string
  user: UserInterface
}
import $api from '../Api'
import { AxiosResponse } from 'axios'
import { UserInterface } from '../Types/UserTypes/UserTypes'

export default class UserService {
  static async fetchUsers (): Promise<AxiosResponse<UserInterface[]>> {
    return $api.get<UserInterface[]>('/users')
  }

  static async fetchUserByResetToken (token: string): Promise<AxiosResponse<UserInterface>> {
    return $api.get<UserInterface>(`/user/reset/${token}`)
  }

  static async getTrainers (): Promise<AxiosResponse<UserInterface[]>> {
    return $api.get<UserInterface[]>('/users/trainers')
  }

  static async saveUserPhoto (photo: FormData, id: number) {
    return $api.post('/users/photo?id=' + id, photo)
  }

  static async setCoach (userId: number) {
    return $api.patch('/users/set/coach', { id: userId })
  }
}
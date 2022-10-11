import $api from '../http'
import {AxiosResponse} from 'axios'
import { UserInterface } from '../types/user_types/UserTypes'

export class UserService {
  static async fetchUsers (): Promise<AxiosResponse<UserInterface[]>> {
    return $api.get<UserInterface[]>('/users')
  }
}
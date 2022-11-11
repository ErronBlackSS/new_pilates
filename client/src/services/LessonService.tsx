import { AxiosResponse } from 'axios'
import $api from '../Api'

export default class AuthService {
  static async createLesson(lesson): Promise<AxiosResponse> {
    return $api.post('/lessons', { ...lesson })
  }
}
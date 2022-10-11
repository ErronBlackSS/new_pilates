import { AxiosResponse } from 'axios'
import { AuthResponse } from '../types/response/AuthResponse'
import $api from '../http'

export default class AuthService {

  static async login (email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return await $api.post<AuthResponse>('/login', {email, password})
  }

  static async registration (name: string, lastname: string, phone: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', {name, lastname, phone, email, password})
  }

  static async logout (): Promise<void> {
    return await $api.post('/logout')
  }
}
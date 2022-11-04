import { UserInterface } from '../Types/UserTypes/UserTypes'
import { makeAutoObservable } from 'mobx'
import { RESPONSE_STATUSES } from '../Utils/error_statuses'

import AuthService from '../Services/AuthService'
export default class UserStore {
  user = {} as UserInterface
  isAuth = false
  isLoading = false

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: UserInterface) {
    this.user = user
  }

  setLoading(bool: boolean) {
    this.isLoading = bool
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      return { status: RESPONSE_STATUSES.SUCCESS }
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async registration(name: string, lastname: string, phone: string, email: string, password: string) {
    try {
      const response = await AuthService.registration(name, lastname, phone, email, password)
      console.log(response)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      return { status: RESPONSE_STATUSES.SUCCESS }
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async resetSendMail(email: string) {
    try {
      await AuthService.resetSendMail(email)
      return { status: RESPONSE_STATUSES.SUCCESS }
    } catch (e) {
      return { status: RESPONSE_STATUSES.ERROR, message: e.response?.data?.message }
    }
  }

  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({} as UserInterface)
    } catch (e) {
      console.log(e.response?.data?.message)
    } 
  }

  async checkAuth() {
    this.setLoading(true)
    try {
      const response = await AuthService.check()
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e) {
      console.log(e.response?.data?.message)
    } finally {
      this.setLoading(false)
    }
  }
}
import { AxiosResponse } from 'axios'
import $api from '../Api'

export default class AuthService {
  static async createLesson(lesson): Promise<AxiosResponse> {
    return await $api.post('/lessons', { ...lesson })
  }

  static async getAll(): Promise<AxiosResponse> {
    return await $api.get('/lessons')
  }

  static async getByWeek(week): Promise<AxiosResponse> {
    return await $api.get('/lessons/week', { params: { week } })
  }

  static async book(lesson_id, user_id): Promise<AxiosResponse> {
    return await $api.post('/lessons/book', { lesson_id, user_id })
  }

  static async getLessonsCurrentWeek(week): Promise<AxiosResponse> {
    return await $api.get('/lessons/week/list', { params: { week } })
  }

  static async getAdminPlannedLessons(): Promise<AxiosResponse> {
    return await $api.get('/lessons/admin/planned')
  }

  static async getUserPlannedLessons(): Promise<AxiosResponse> {
    return await $api.get('/lessons/user/planned')
  }

  static async getUserBookedLessons(user_id, week): Promise<AxiosResponse> {
    return await $api.get('/lessons/user', { params: { user_id, week } })
  }

  static async getUserHistoryLessons(userId): Promise<AxiosResponse> {
    return await $api.get('/lessons/user/history', { params: { userId } })
  }
}
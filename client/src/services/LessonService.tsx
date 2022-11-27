import { AxiosResponse } from 'axios'
import $api from '../Api'

export default class AuthService {
  static async createLesson(lesson): Promise<AxiosResponse> {
    return await $api.post('/lessons', { ...lesson })
  }

  static async updateLesson(lesson): Promise<AxiosResponse> {
    console.log('ALLO EBATY', lesson)
    return await $api.patch('/lessons', { ...lesson })
  }

  static async deleteLesson(lesson_id): Promise<AxiosResponse> {
    return await $api.delete('/lessons', { params: { lesson_id } })
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

  static async getUserPlannedLessons(user_id): Promise<AxiosResponse> {
    return await $api.get('/lessons/user/planned', { params: { user_id } })
  }

  static async getUserBookedLessons(user_id, week): Promise<AxiosResponse> {
    return await $api.get('/lessons/user', { params: { user_id, week } })
  }

  static async getUserHistoryLessons(user_id): Promise<AxiosResponse> {
    return await $api.get('/lessons/user/history', { params: { user_id } })
  }

  static async getListBookedUsers(lesson_id): Promise<AxiosResponse> {
    return await $api.get('/lessons/booked', { params: { lesson_id } })
  }

  static async cancelLesson(lesson_id, user_id): Promise<AxiosResponse> {
    return await $api.delete('/lessons/book', { params: { lesson_id, user_id } })
  }
}
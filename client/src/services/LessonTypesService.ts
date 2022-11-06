import { AxiosResponse } from 'axios'
import $api from '../Api'
import { ILessonType } from '../Types/ResponseTypes/LessonTypesResponse'

export default class LessonTypesService {
  static async getAll(): Promise<AxiosResponse<ILessonType[]>> {
    return await $api.get<ILessonType[]>('/lesson_types')
  }

  static async create(title: string, description: string, global_lesson_type: string, duration: string): Promise<AxiosResponse<ILessonType>> {
    return await $api.post<ILessonType>('/lesson_types', { title: title, description: description, global_lesson_type, duration })
  }
}

import { AxiosResponse } from 'axios'
import $api from '../Api'
import { ILessonType } from '../Types/ResponseTypes/LessonTypesResponse'

export default class LessonTypesService {
  static async getAll(): Promise<AxiosResponse<ILessonType[]>> {
    return await $api.get<ILessonType[]>('/lesson_types')
  }

  static async create(title: string, description: string, global_lesson_type: string, duration: string, image: FormData): Promise<AxiosResponse<ILessonType>> {
    return await $api.post<ILessonType>('/lesson_types', { title, description, global_lesson_type, duration, image })
  }

  static async update(id: number, image?: FormData, title?: string, description?: string, global_lesson_type?: string, duration?: number): Promise<AxiosResponse<ILessonType>> {
    return await $api.post<ILessonType>('/lesson_types/update', { id, title, description, global_lesson_type, duration, image })
  }

  static async delete(id: number): Promise<AxiosResponse> {
    return await $api.delete('/lesson_types?id=' + id)
  }

  static async getAllByGroup() {
    return await $api.get('/lesson_types/bygroup')
  }
}

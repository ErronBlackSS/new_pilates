import { AxiosResponse } from 'axios'
import $api from '../Api'
import { ILessonType } from '../Types/ResponseTypes/LessonTypesResponse'

export default class LessonTypesService {
  static async getAll(): Promise<AxiosResponse<ILessonType[]>> {
    return await $api.get<ILessonType[]>('/lesson_types')
  }
}

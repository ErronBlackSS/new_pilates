export interface Lessons {
  lessons: Lessons[]
}

export interface ILessonShedule {
  time: string
  lessons: ILesson
}

export interface ILesson {
  capacity: number
  date: string
  end_time: string
  id: number
  occupied: number
  start_time: string
  title: string
  trainer_id: number
  trainer_name: string
  description: string
  weekDay: number
  show: boolean
}

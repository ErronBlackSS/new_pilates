export interface Lessons {
  lessons: Lessons[]
}

interface ILessonShedule {
  time: string
  lessons: ILesson
}

interface ILesson {
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
  }
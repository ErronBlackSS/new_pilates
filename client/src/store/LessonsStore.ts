import { makeAutoObservable } from 'mobx'
import LessonService from '../Services/LessonService'
import { getCurrentWeek } from '../Utils/functions'

class LessonsStore {
  lessons = []
  weekDays = []

  constructor() {
    makeAutoObservable(this)
  }
  
  setLessons(lessons) {
    this.lessons = lessons
  }

  setWeekDays(weekDays) {
    this.weekDays = weekDays
  }

  sortLessonsByTime() {
    if(this.lessons) {
      this.lessons.sort(function(a, b){
        if (a.time > b.time)
          return 1
        if (a.time < b.time)
          return -1
        return 0
      })
    }
  }

  addLesson(lesson) {
    this.lessons.push(lesson)
  }

  async getAllLessons() {
    const resp = await LessonService.getAll()
    this.lessons = resp.data
  }

  filterCalendar(trainer, lesson) {
    if(trainer) {
      this.filterLessons('trainer_name', trainer)
    }
    if(lesson) {
      this.filterLessons('title', lesson)
    }
    console.log(this.trainings)
  }

  filterLessons(type, value) {
    console.log(type)
    this.lessons = this.lessons.map((item) => {
      Object.keys(item.lessons).forEach((key) => {
        if(item.lessons[key]) {
          item.lessons[key][type] === value ? item.lessons[key].show = true : item.lessons[key].show = false
        }
      })
      return item
    })
    console.log(this.lessons)
  }

  clearFilter() {
    this.lessons = this.lessons.map((item) => {
      Object.keys(item.lessons).forEach((key) => {
        if(item.lessons[key]) {
          item.lessons[key].show = true
        }
      })
      return item
    })
  }

  async bookLesson(lessonId, userId) {
    const resp = await LessonService.book(lessonId, userId)
    if (resp.status === 202) {
      alert(resp.data.message)
      return
    }
    alert('Вы успешно записались на занятие')
  }

  async getLessonsByWeek(currentWeek) {
    const resp = await LessonService.getByWeek(currentWeek)
    this.setWeekDays(resp.data.weekDays)
    this.setLessons(resp.data.trainings)
    this.sortLessonsByTime()
  }

  async getAdminPlannedLessons() {
    const resp = await LessonService.getAdminPlannedLessons()
    console.log(resp, 'SWITH TO PLANNED')
    this.setLessons(resp.data)
    this.sortLessonsByTime()
  }

  async getLessonsCurrentWeek() {
    const week = getCurrentWeek()
    const resp = await LessonService.getLessonsCurrentWeek(week)
    this.setLessons(resp.data)
  }

  async getUserBookedLessons(userId) {
    const week = getCurrentWeek()
    const resp = await LessonService.getUserBookedLessons(userId, week)
    this.setLessons(resp.data)
  }

  async getUserPlannedLessons(userId) {
    const resp = await LessonService.getUserPlannedLessons(userId)
    this.setLessons(resp.data)
  }

  async getUserHistoryLessons(userId) {
    const resp = await LessonService.getUserHistoryLessons(userId)
    this.setLessons(resp.data)
  }

  async cancelLesson(lessonId, userId) {
    const resp = await LessonService.cancelLesson(lessonId, userId)
    if (resp.status === 202) {
      alert(resp.data.message)
      return
    }
    this.lessons = this.lessons.filter((item) => item.lesson_id !== lessonId)
  }

  get trainings () {
    return this.lessons
  }

}

export default new LessonsStore()
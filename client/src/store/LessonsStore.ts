import { makeAutoObservable } from 'mobx'

export default class LessonsStore {
  lessons = {}
  
  constructor() {
    makeAutoObservable(this)
  }
  
  
  
  
}
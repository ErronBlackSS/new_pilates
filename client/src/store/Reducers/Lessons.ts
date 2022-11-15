import * as LESSONS from '../Actions/Lessons'
import LessonsStore from '../LessonsStore'
import { useContext } from 'react'

export const Lessons = () => {
  
  


  const actions = {

  }
    
  const mutations = {
    [LESSONS.SET_LESSONS]: (state, payload) => {
      LessonsStore.lessons = payload
    }
  }


  return {
    actions,
    mutations
  }
}

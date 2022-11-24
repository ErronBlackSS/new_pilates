import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import LessonService from '../../../Services/LessonService'

const BookedUsers = ({ lesson_id }) => {

  const [bookedUsers, setBookedUsers] = useState([])

  const getBookedUsers = async () => {
    const resp = await LessonService.getListBookedUsers(lesson_id)
    console.log(resp.data, 'users')
    setBookedUsers(resp.data)
  }

  useEffect(() => {
    getBookedUsers()
  }, [])

  return (
    <div
      className="flex text-left max-w-[600px]"
    >
      <div className="flex flex-col gap-[30px]">
        {bookedUsers.map(user => (
          <div>
            {user.name + ' ' + user.lastname}
          </div>
        ))}
      </div>
    </div>
  )
}

export default observer(BookedUsers)
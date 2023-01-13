import LessonsStore from '../../Store/LessonsStore'
import SheduleCell from './SheduleCell'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { Lesson } from '../../Types/LessonsTypes/LessonsTypes'

interface ISheduleTable {
  selectLesson?: (lesson: Lesson) => void
}

const SheduleTable: FC<ISheduleTable> = ({selectLesson}) => {
  return (
    <table
      className="bg-[#FFF] p-[25px] gap-[15px] border-separate overflow-y-scroll"
    >
      <thead>
        <tr>
          <th className="w-[155px] h-[40]"><div><p>Время</p></div></th>
          {LessonsStore.weekDays && LessonsStore.weekDays.map((day, index) => (
            <th className="w-[155px] h-[40]" style={{wordSpacing: '99px'}} key={index}><div><p>{day}</p></div></th>
          ))}
        </tr>
      </thead>
      <tbody>
        {LessonsStore.trainings && LessonsStore.trainings.map((day, index) => (
          <tr key={index}>
            <th className="border border-[#F2F2F3] w-[155px] h-[105px]">
              <div>
                <p>{day.time}</p>
              </div>
            </th>
            {day.lessons && Object.values(day.lessons).map((lesson: Lesson, index) => (      
              <SheduleCell
                key={index}
                lesson={lesson}
                selectLesson={selectLesson}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default observer(SheduleTable)
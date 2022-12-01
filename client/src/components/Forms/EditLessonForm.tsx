import { useEffect, useState } from 'react'
import Select from '../Common/Select'
import { TimePicker } from 'react-ios-time-picker'
import DatePicker from 'react-datepicker'
import UserService from '../../Services/UserService'
import LessonTypesService from '../../Services/LessonTypesService'
import LessonsStore from '../../Store/LessonsStore'
import { observer } from 'mobx-react-lite'

const EditLessonForm = ({ lesson_id }) => {
  
  const currentLesson = LessonsStore.lessons.find((item) => item.lesson_id === lesson_id)

  const getAndSetTrainers = async () => {
    const resp = await UserService.getTrainers()
    console.log(resp)
    const trainersArr = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.name
      }
    })
    setTrainers(trainersArr)
    const defaultTrainer = trainersArr.find((item) => item.value === currentLesson.coach_id)
    setTrainer(defaultTrainer)
  }
  
  const getAndSetLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    const lessonTypesArr = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.title
      }
    })
    setLessonTypes(lessonTypesArr)
    const defaultLessonType = lessonTypesArr.find((item) => item.label === currentLesson.title)
    setLessonType(defaultLessonType)
  }

  const [trainers, setTrainers] = useState([])
  const [lessonTypes, setLessonTypes] = useState([])

  const [trainer, setTrainer] = useState({ value: 0, label: '' })
  const [lessonType, setLessonType] = useState({ value: 0, label: '' })
  const [startTime, setStartTime] = useState(currentLesson.start_time.slice(0, 5))
  const [endTime, setEndTime] = useState(currentLesson.end_time.slice(0, 5))
  const [startDate, setStartDate] = useState(new Date(currentLesson.date))
  const [capacity, setCapacity] = useState(currentLesson.capacity)
  
  const formDisabled = !trainer?.value || !lessonType?.value || !startTime || !endTime || !startDate

  const onSubmit = async (e) => {
    e.preventDefault()
    const data = {
      id: lesson_id,
      coach_id: trainer.value,
      lesson_type_id: lessonType.value,
      capacity: capacity,
      date: new Date(startDate.setDate(startDate.getDate() + 1)),
      start_time: startTime,
      end_time: endTime
    }
    LessonsStore.updateLesson(data)
  }

  useEffect(() => {
    getAndSetTrainers()
    getAndSetLessonTypes()
  }, [])

  return (
    <div
      className="flex justify-center text-left"
    >
      <form
        onSubmit={onSubmit}
      >
        <div className="flex flex-col gap-[25px]">
          <Select
            options={trainers}
            label="Тренер"
            onSelect={setTrainer}
            defaultValue={trainer}
          />
          <Select
            options={lessonTypes}
            label="Тип занятия"
            onSelect={setLessonType}
            defaultValue={lessonType}
          />
          <div className="flex flex-row gap-[30px]">
            <TimePicker
              onSave={setStartTime}
              value={startTime}
              saveButtonText="Сохранить"
              cancelButtonText="Отменить"
            />
            <TimePicker
              onSave={setEndTime}
              value={endTime}
              saveButtonText="Сохранить"
              cancelButtonText="Отменить"
            />
          </div>
          <input value={capacity} onChange={(e) => { setCapacity(+e.target.value) }} type="number" />
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <button
          disabled={formDisabled}
          className={ 'w-[100%] px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-[#D11655] opacity-40' : 'bg-bordo')}
        >
          Изменить
        </button>
      </form>
    </div>
  )
}

export default observer(EditLessonForm)
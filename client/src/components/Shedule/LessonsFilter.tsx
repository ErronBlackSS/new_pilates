import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import LessonsStore from '../../Store/LessonsStore'
import LessonTypesService from '../../Services/LessonTypesService'
import UserService from '../../Services/UserService'
import Modal from '../Common/Modal'
import Select from '../Common/Select'

const LessonsFilter = () => {

  const [showFilterModal, setShowFilterModal] = useState(false)
  const [trainers, setTrainers] = useState([])
  const [lessonTypes, setLessonTypes] = useState([])

  const [selectedTrainer, setSelectedTrainer] = useState({ value: '', label: '' })
  const [selectedLessonType, setSelectedLessonType] = useState({ value: '', label: '' })

  const formDisabled = !selectedTrainer && !selectedLessonType

  const getAndSetTrainers = async () => {
    const resp = await UserService.getTrainers()
    const trainers = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.name
      }
    })
    setTrainers(trainers)
  }
  const getAndSetLessonTypes = async () => {
    const resp = await LessonTypesService.getAll()
    const lessonTypes = resp.data.map((item) => {
      return {
        value: item.id,
        label: item.title
      }
    })
    setLessonTypes(lessonTypes)
  }

  const onFilter = () => {
    LessonsStore.filterCalendar(selectedTrainer.label, selectedLessonType.label)
    setShowFilterModal(false)
  }

  const onClear = () => {
    LessonsStore.clearFilter()
    setShowFilterModal(false)
  }

  useEffect(() => {
    getAndSetTrainers()
    getAndSetLessonTypes()
  }, [])

  return (
    <>
      <button
        className="px-[16px] py-[4px] cursor-pointer rounded-[10px] bg-white"
        style={{border: '1px solid #1B1B1B'}}
        onClick={() => setShowFilterModal(true)}
      >
        Фильтры
      </button>
      {
        showFilterModal &&
          <Modal
            title={'Фильтры'}
            showModal={showFilterModal}
            setShowModal={setShowFilterModal}
            width={'300px'}
            height={'400px'}
          >
            <div className="flex flex-col justify-center items-center gap-[20px]">
              <Select options={trainers} label="Тренер" onSelect={setSelectedTrainer}/>
              <Select options={lessonTypes} label="Тип занятия" onSelect={setSelectedLessonType}/>
              <div className="flex flex-row justify-between w-full">
                <button
                  className={ 'px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] bg-bordo' }
                  onClick={onClear}
                >
                  Очистить
                </button>
                <button
                  disabled={formDisabled}
                  onClick={onFilter}
                  className={ 'px-6 py-2 mt-4 text-[#fff] cursor-pointer rounded-[10px] ' + (formDisabled ? ' bg-[#D11655] opacity-40' : 'bg-bordo')}
                >
                  Применить
                </button>
              </div>
            </div>
          </Modal>
      }
    </>
  )
}

export default observer(LessonsFilter)
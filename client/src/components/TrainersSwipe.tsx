import { useEffect, useState } from 'react'
import UserService from '../Services/UserService'
import TrainerItem from './Trainers/TrainerItem'

const TrainersSwipe = () => {

  const [trainers, setTrainers] = useState([])

  useEffect(() => {
    UserService.getTrainers()
      .then(res => {
        setTrainers(res.data)
        console.log(res.data)
        
      })
  }, [])


  return (
    <>
      <div className="flex w-full">
        <div className="flex flex-wrap gap-[32px] pb-[10px] mobile-below:px-[16px] mobile-below:flex-nowrap mobile-below:overflow-x-scroll scrollbar-hide mobile-below:justify-start">          
          {trainers.map((coach) => {
            return (
              <TrainerItem
                key={coach.id}
                name={coach.name}
                lastname={coach.lastname}
                image_url={coach.image_url}                      
              />
            )
          })}
          {trainers.map((coach) => {
            return (
              <TrainerItem
                key={coach.id}
                name={coach.name}
                lastname={coach.lastname}
                image_url={coach.image_url}                      
              />
            )
          })}
          {trainers.map((coach) => {
            return (
              <TrainerItem
                key={coach.id}
                name={coach.name}
                lastname={coach.lastname}
                image_url={coach.image_url}                      
              />
            )
          })}
          
        </div>        
      </div>
    </>
  ) 
}

export default TrainersSwipe
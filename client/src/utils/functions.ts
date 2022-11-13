export const getCurrentWeek = () => {
  const date = new Date()
  let currentDayIndex = date.getDay()
  currentDayIndex = currentDayIndex === 0 ? 7 : currentDayIndex
  if (currentDayIndex === 1) {
    const start = date
    let end = new Date(start)
    end = new Date(end.setDate(end.getDate() + 6))
    start.setHours(0)
    start.setMinutes(0)
    end.setHours(23)
    end.setMinutes(59)
    return { start: start, end: end }
  } else {
    const start = new Date(date.setDate(date.getDate() - currentDayIndex + 1))
    let end = new Date(start)
    end = new Date(end.setDate(end.getDate() + 6))
    start.setHours(0)
    start.setMinutes(0)
    end.setHours(23)
    end.setMinutes(59)
    return { start: start, end: end }
  }
}

export const getNextWeek = (date) => {
  const currentDayIndex = date.getDay()
  console.log(currentDayIndex)
  if (currentDayIndex === 1) {
    return new Date(date)
  } else {
    return new Date(date.setDate(date.getDate() - currentDayIndex + 1))
  }
}
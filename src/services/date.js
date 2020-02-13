const getDay = (day) => day < 10 ? `0${day}` : day
const getMonth = (month) => month < 10 ? `0${month}` : month

const stingToDate = (str) => new Date(str)

export const dateFormatter = (date) => {
  const dateObj = stingToDate(date)
  const day = getDay(dateObj.getDate())
  const month = getMonth(dateObj.getMonth() + 1)
  const year = dateObj.getFullYear()

  return `${day}/${month}/${year}`
}

export const filterByDate = (items = [], startDate, endDate) => {
  const start = !!startDate ? startDate :  new Date(null)
  const end = !!endDate ? endDate :  new Date()

  return items.filter(item => (
    stingToDate(item.EmployeeStartDate) <= stingToDate(end) && stingToDate(start) < stingToDate(item.EmployeeStartDate))
  )
}

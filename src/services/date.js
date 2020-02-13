const getDay = (day) => day < 10 ? `0${day}` : day
const getMonth = (month) => month < 10 ? `0${month}` : month

export const dateFormatter = (date) => {
  const dateObj = new Date(date)
  const day = getDay(dateObj.getDate())
  const month = getMonth(dateObj.getMonth() + 1)
  const year = dateObj.getFullYear()

  return `${day}/${month}/${year}`
}

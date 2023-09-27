import moment from 'moment'

export const currentDateToSQL = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

export const dateFormatToSql = (date: string) => {
  const newDate = moment(date).format('YYYY-MM-DD HH:mm:ss')
  return newDate
}

export const dateFormat = (date: string) => {
  if (date === undefined || date.length < 1) return 'Algo salio mal con la fecha'
  const newDate = moment(date).format('L')
  const newTime = moment(date).format('LT')
  return `${newDate} ${newTime}`
}

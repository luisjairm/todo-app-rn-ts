import moment from 'moment'

export const currentDateToSQL = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

export const dateFormatToSql = (date: string) => {
  const newDate = moment(date).format('YYYY-MM-DD HH:mm:ss')
  return newDate
}

export const dateFormat = (date: string | undefined) => {
  if (date === undefined || date.length < 1) return undefined
  const newDate = moment(date).format('L')
  const newTime = moment(date).format('LT')
  return `${newDate} ${newTime}`
}

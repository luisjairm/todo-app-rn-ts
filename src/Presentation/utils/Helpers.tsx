import moment from 'moment'

export const currentDateToSQL = () => {
  return moment().format('YYYY-MM-DD HH:mm:ss')
}

export const dateFormatToSql = (date: string) => {
  const newDate = moment(date).format('YYYY-MM-DD HH:mm:ss')
  return newDate
}

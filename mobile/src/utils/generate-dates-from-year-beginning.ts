import dayjs from 'dayjs'

export function generateDatesFromYearBeginning(){
  const firstDayOfTheYear = dayjs().startOf('year')
  const today = new Date()

  const dateRange = []
  let compareDate = firstDayOfTheYear

  while(compareDate.isBefore(today)){
    dateRange.push(compareDate.toDate())
    compareDate = compareDate.add(1, 'day')
  }

  return dateRange
}
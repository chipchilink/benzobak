import schedule from '@/admin/schedule.json'
import leaderboards from '@/admin/leaderboard.json'
import summary from '@/admin/summary.json'
import events from '@/admin/events.json'
import * as D from '@/utils/data'

export namespace Sport {
  const aggregateDates = () => {
    const result = new Set<number>()

    for (const event of schedule) {
      const t = D.normalizedDate(event)
      result.add(t)
    }

    for (const leaderboard of leaderboards) {
      const t = D.normalizedDate(leaderboard)
      result.add(t)
    }

    for (const total of summary) {
      const t = D.normalizedDate(total)
      result.add(t)
    }

    return Array.from(result)
  }

  const asc = (a: number, b: number) => a - b

  export const getDays = () => aggregateDates().sort(asc)
  export const getFirstDay = () => getDays()[0]

  export const getSections = () => ['schedule', 'leaderboard', 'summary']

  export const getFirstSection = () => getSections()[0]
}

export namespace Events {
  const aggregateDates = () => {
    const result = new Set<number>()

    for (const event of events) {
      const t = D.normalizedDate(event)
      result.add(t)
    }

    return Array.from(result)
  }

  const asc = (a: number, b: number) => a - b

  export const getDays = () => aggregateDates().sort(asc)
  export const getFirstDay = () => getDays()[0]
}

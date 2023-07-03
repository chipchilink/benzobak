import * as S from './state/'
import * as _ from './core'
import * as D from '@/utils/data'

export const daymapper = (value: number) => {
  const display = D.render(D.unnormalizedDate(value))
  return {
    display,
    value,
  }
}

export const dedup = <A>(as: A[]) => Array.from(new Set(as))

export const byDay = (currentDay: number) => (itm: D.Dateable) => {
  const day = D.normalizedDate(itm)
  return day === currentDay
}

export const ErrorByDay = (p: {
  day: number
  children: (d: string) => string
}) => {
  const d = isNaN(p.day) ? '???' : String(p.day)
  return p.children(d)
}

export const navigate = {
  sport: {
    day: (d: number) => ({
      page: (p: string) => `/sport/${d}/${p}`,
    }),
  },
  events: {
    day: (d: number) => `/events/${d}`,
  },
}

export const useSport = () => {
  const H = S.useHelped()

  const day = _.Sport.getFirstDay()
  const section = _.Sport.getFirstSection()

  const click = () => {
    H.sport.pushDay(day)
    H.sport.pushSection(section)
  }

  const path = navigate.sport.day(day).page(section)

  return { path, click }
}

export const useEvent = () => {
  const H = S.useHelped()

  const day = _.Events.getFirstDay()

  const click = () => {
    H.sport.pushDay(day)
  }

  const path = navigate.events.day(day)

  return { path, click }
}

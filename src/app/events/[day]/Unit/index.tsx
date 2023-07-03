import * as UI from '@/ui/'
import type { Located } from '@/utils/located'
import style from './Unit.module.scss'

export interface Time {
  hour: number
  minutes: number
}

export interface Scheduled {
  start: Time
  end: Time
}

interface Meta extends Scheduled, Located {
  title: string
}

const c = (x: number) => (x <= 9 ? `0${x}` : `${x}`)

const Scheduled = (p: Scheduled) => {
  return (
    <span className={style.time}>
      {p.start.hour}:{c(p.start.minutes)} - {p.end.hour}:{c(p.end.minutes)}
    </span>
  )
}

export const Unit = (p: Meta) => {
  return (
    <div className={style.item}>
      <Scheduled {...p} />
      <h2 className={style.title}>{p.title}</h2>
      <UI.Street>{p.location}</UI.Street>
    </div>
  )
}

import * as UI from '@/ui/'
import style from './Unit.module.scss'
import group from './Group.module.scss'

export interface Time {
  hour: number
  minutes: number
}

export interface Scheduled {
  start: Time
  end: Time
}

export interface Located {
  location: string
}

interface Meta extends Scheduled, Located {
  title: string
  description: string
  regulations?: string
  results?: string
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
      <p className={style['sub-title']}>{p.description}</p>
      <UI.Street>{p.location}</UI.Street>
      {p.regulations || p.results ? (
        <ul className={group.container}>
          {p.regulations ? (
            <li className={group.item}>
              <figure>
                <UI.File href={p.regulations} />
                <figcaption className={group.description}>
                  Регламент участия
                </figcaption>
              </figure>
            </li>
          ) : null}
          {p.results ? (
            <li className={group.item}>
              <figure>
                <UI.File href={p.results} />
                <figcaption className={group.description}>
                  Итоги соревнований
                </figcaption>
              </figure>
            </li>
          ) : null}
        </ul>
      ) : null}
    </div>
  )
}

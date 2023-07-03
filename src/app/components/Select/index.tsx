import * as React from 'react'
import { Ripple } from '../Ripple'
import s from './Select.module.scss'

type Data<A> = ReadonlyArray<{ value: A; display: string }>

interface Props<A> {
  data: Data<A>
  value: A | null
  placeholder: string
  onChange: (a: A | null) => void
}

const RIPPLE_COLOR = '#eee'

export const Select = <A extends string | number>(props: Props<A>) => {
  const { data, value, placeholder, onChange } = props

  const itemClick = (value: A) => () => {
    onChange(value)
  }

  const displayFromData = () => {
    const raw = data.find((x) => x.value === value)
    return raw?.display ?? placeholder
  }
  const display = value ? displayFromData() : placeholder
  return (
    <div className={s.wrapper}>
      <div className={s.control} tabIndex={0}>
        <Ripple color={RIPPLE_COLOR} />
        {display}
        <div className={s.arrow} />
      </div>
      <div className={s.dropdown}>
        {data.map((itm) => {
          return (
            <div
              key={itm.value}
              className={s.item}
              onMouseDown={itemClick(itm.value)}
            >
              <Ripple color={RIPPLE_COLOR} />
              {itm.display}
            </div>
          )
        })}
      </div>
    </div>
  )
}

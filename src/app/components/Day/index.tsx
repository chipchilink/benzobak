import * as React from 'react';
import { Link } from '../../Route'
import cn from 'classnames'
import { Ripple } from '../Ripple'
import style from './Day.module.scss'

export const Container = (p: { children: React.ReactNode }) => {
  return <div className={style.container}>{p.children}</div>
}

export const Day = (p: {
  children: string
  isActive: boolean
  href?: {}
  onClick: () => void
}) => {
  const className = cn(style.item, {
    '-active': p.isActive,
  })

  return (
    <Link to={p.href} className={className} onClick={p.onClick}>
      {p.children}
      <Ripple />
    </Link>
  )
}

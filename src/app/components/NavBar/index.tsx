import * as React from 'react'
import { Link, useRoute } from '../../Route'
import cn from 'classnames'
import { Ripple } from '../Ripple'
import nav from './NavBar.module.scss'

const noop = () => {}

export const Item = (p: {
  href?: {}
  children: string
  level?: number
  onClick?: () => void
  isActive?: boolean
}) => {
  const router = useRoute();
  const onClick = p.onClick ?? noop
  const isActive = p.isActive ?? router.current === p.href;

  const className = cn(nav.item, {
    '-active': isActive,
  })

  return (
    <Link to={p.href} className={className} onClick={onClick}>
      <Ripple />
      {p.children}
    </Link>
  )
}

export const Container = (p: { children: React.ReactNode }) => {
  return <nav className={nav.wrapper}>{p.children}</nav>
}

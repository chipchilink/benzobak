'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import cn from 'classnames'
import { Ripple } from '../Ripple'
import nav from './NavBar.module.scss'

const noop = () => {}

export const useActive = (href: string, level: number) => {
  const pathname = usePathname()
  const current = pathname.split('/')[level]
  const self = href.split('/')[level]
  return current === self
}

export const Item = (p: {
  href: string
  children: string
  level?: number
  onClick?: () => void
  isActive: boolean
}) => {
  const onClick = p.onClick ?? noop

  const className = cn(nav.item, {
    '-active': p.isActive,
  })

  return (
    <Link href={p.href} className={className} onClick={onClick}>
      <Ripple />
      {p.children}
    </Link>
  )
}

export const Container = (p: { children: React.ReactNode }) => {
  return <nav className={nav.wrapper}>{p.children}</nav>
}

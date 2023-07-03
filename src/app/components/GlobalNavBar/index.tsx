'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import cn from 'classnames'
import { useSport, useEvent } from '@/app/shared'
import nav from './styles.module.scss'
import { useActive } from '../utils'

const noop = () => {}

const Item = (p: {
  href: string
  children: string
  onClick?: () => void
  id: string
}) => {
  const isActive = useActive(p.href, 1)
  const onClick = p.onClick ?? noop

  const className = cn(nav.item, {
    '-active': isActive,
  })
  return (
    <Link id={p.id} href={p.href} className={className} onClick={onClick}>
      {p.children}
    </Link>
  )
}

export const NavBar = () => {
  const pathname = usePathname()
  const sport = useSport()
  const event = useEvent()

  if (pathname === '/') return null

  return (
    <div className={nav.wrapper}>
      <div className={nav.container}>
        <Item href="/" id="main">
          Главная
        </Item>
        <Item href={sport.path} onClick={sport.click} id="sport">
          Спорт
        </Item>
        <Item href="/navigation" id="navigation">
          Навигация
        </Item>
        <Item href={event.path} onClick={event.click} id="events">
          Мероприятия
        </Item>
      </div>
    </div>
  )
}

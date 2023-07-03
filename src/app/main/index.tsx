'use client'

import Link from 'next/link'
import { useSport, useEvent } from '@/app/shared'
import grid from './grid.module.scss'

const noop = () => {}

const Tile = (p: { href: string; children: string; onClick?: () => void }) => {
  const onClick = p.onClick ?? noop
  return (
    <Link className={grid.tile} href={p.href} onClick={onClick}>
      <span className={grid.text}>{p.children}</span>
    </Link>
  )
}

export const Main = () => {
  const sport = useSport()
  const event = useEvent()

  return (
    <nav className={grid.wrapper}>
      <Tile href={sport.path} onClick={sport.click}>
        Спорт
      </Tile>
      <Tile href={event.path} onClick={event.click}>
        Мероприятия
      </Tile>
      <Tile href="/media-center">Медиацентр</Tile>
      <Tile href="/navigation">Навигация</Tile>
      <Tile href="/medicine">Медицина</Tile>
      <Tile href="/residence">Проживание питание трансфер</Tile>
    </nav>
  )
}

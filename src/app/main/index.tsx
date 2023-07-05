import * as React from 'react';
import { Link } from 'react-router-dom'
import { useSport, useEvent } from '../shared'
import grid from './grid.module.scss'

const noop = () => {}

const id = (x: string) => `tile-${x}`;

const Tile = (p: { href: string; children: string; onClick?: () => void; id: string }) => {
  const onClick = p.onClick ?? noop
  return (
    <Link className={grid.tile} to={p.href} onClick={onClick} id={id(p.id)}>
      <span className={grid.text}>{p.children}</span>
    </Link>
  )
}

export const Main = () => {
  const sport = useSport()
  const event = useEvent()

  return (
    <nav className={grid.wrapper}>
      <Tile href={sport.path} onClick={sport.click} id="sport">
        Спорт
      </Tile>
      <Tile href={event.path} onClick={event.click} id="events">
        Мероприятия
      </Tile>
      <Tile href="/media-center" id="media-center">Медиацентр</Tile>
      <Tile href="/navigation" id="navigation">Навигация</Tile>
      <Tile href="/medicine" id="medicine">Медицина</Tile>
      <Tile href="/residence" id="rft">Проживание питание трансфер</Tile>
    </nav>
  )
}

import * as React from 'react';
import * as router from '../routers';
import grid from './grid.module.scss'
import { Tile } from './Tile'

export const Main = () => {
  return (
    <nav className={grid.wrapper}>
      <Tile id="sport">Спорт</Tile>
      <Tile id="events">Мероприятия</Tile>
      <Tile fallback="https://google.ru" id="media-center">Медиацентр</Tile>
      <Tile id="navigation">Навигация</Tile>
      <Tile fallback={router.medicine} id="medicine">Медицина</Tile>
      <Tile fallback={router.residence} id="rft">Проживание питание трансфер</Tile>
    </nav>
  )
}

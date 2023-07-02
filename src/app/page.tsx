'use client'

import Link from 'next/link';
import grid from './grid.module.scss';
import { useSport } from './shared';

const noop = () => {};

const Tile = (p: {
  href: string;
  children: string;
  onClick?: () => void;
}) => {
  const onClick = p.onClick ?? noop;
  return (
    <Link className={grid.tile} href={p.href} onClick={onClick}>
      <span className={grid.text}>{p.children}</span>
    </Link>
  );
};

export default () => {
  const sport = useSport();

  return (
    <nav className={grid.wrapper}>
      <Tile href={sport.path} onClick={sport.click}>Спорт</Tile>
      <Tile href="/events">Мероприятия</Tile>
      <Tile href="/events">Медиацентр</Tile>
      <Tile href="/navigation">Навигация</Tile>
      <Tile href="/medicine">Медицина</Tile>
      <Tile href="/residence">Проживание питание трансфер</Tile>
    </nav>
  );
}

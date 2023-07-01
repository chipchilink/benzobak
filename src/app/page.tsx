import Link from 'next/link';
import grid from './grid.module.scss';

const Tile = (p: {
  href: string;
  children: string;
}) => {
  return (
    <Link className={grid.tile} href={p.href}>
      <span className={grid.text}>{p.children}</span>
    </Link>
  );
};

export default () => {
  return (
    <nav className={grid.wrapper}>
      <Tile href="/sport">Спорт</Tile>
      <Tile href="/events">Мероприятия</Tile>
      <Tile href="/events">Медиацентр</Tile>
      <Tile href="/navigation">Навигация</Tile>
      <Tile href="/medicine">Медицина</Tile>
      <Tile href="/residence">Проживание питание трансфер</Tile>
    </nav>
  );
}

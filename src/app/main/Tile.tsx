import * as React from 'react';
import { useSection } from '../components/GlobalNavBar';
import { Link } from '../Route'
import grid from './grid.module.scss'

const id = (x: string) => `tile-${x}`;

export const Tile = (p: { children: string; id: string; fallback?: {} | string }) => {
  const section = useSection(p.id);

  const to = () => {
    const fallback = p.fallback!;
    if(typeof fallback === 'string')
      return { forceHref: fallback }

    return { to: fallback };
  };

  const children = (str?: string) => ({ children: <span className={grid.text}>{str ?? p.children}</span> });

  const getFallback = () => {
    return {
      ...children(),
      ...to(),
    };
  };

  const get = () => {
    const s = section!;
    return {
      to: s.route,
      onClick: s.onClick,
      ...children(s.display),
    };
  };

  const props = section === null
    ? getFallback()
    : get();

  return (
    <Link
      id={id(p.id)}
      className={grid.tile}
      {...props}
    />
  )
}
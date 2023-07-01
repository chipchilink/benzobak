'use client'

import Link from 'next/link'
import { usePathname  } from 'next/navigation'
import cn from 'classnames'
import * as _ from '@/utils';
import nav from './NavBar.module.scss';

const Item = (p: {
    href: string;
    children: string;
}) => {
    const isActive = _.useIsActive(p.href);

    const className = cn(nav.item, {
        '-active': isActive,
    });
    return (
        <Link href={p.href} className={className}>{p.children}</Link>
    );
};

export const NavBar = () => {
    const pathname = usePathname();
    
    if(pathname === '/') return null;

    return (
        <div className={nav.wrapper}>
            <Item href="/">Главная</Item>
            <Item href="/sport">Спорт</Item>
            <Item href="/navigation">Навигация</Item>
            <Item href="/events">Мероприятия</Item>
        </div>
    );
};

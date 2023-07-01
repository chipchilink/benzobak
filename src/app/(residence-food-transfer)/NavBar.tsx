'use client'

import Link from 'next/link'
import cn from 'classnames'
import * as _ from '@/utils';
import nav from './NavBar.module.scss'

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
    return (
        <nav className={nav.wrapper}>
            <Item href="/residence">Проживание</Item>
            <Item href="/food">Питание</Item>
            <Item href="/transfer">Трансфер</Item>
        </nav>
    );
};
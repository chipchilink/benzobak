'use client'

import Link from 'next/link'
import cn from 'classnames'
import { useActive } from '../utils';
import nav from './NavBar.module.scss'

const noop = () => {};

export const Item = (p: {
    href: string;
    children: string;
    level?: number;
    onClick?: () => void;
}) => {
    const level = p.level ?? 1;
    const onClick = p.onClick ?? noop;
    const isActive = useActive(p.href, level);

    const className = cn(nav.item, {
        '-active': isActive,
    });

    return (
        <Link
            href={p.href}
            className={className}
            onClick={onClick}>
            {p.children}
        </Link>
    );
};

export const Container = (p: { children: React.ReactNode }) => {
    return (
        <nav className={nav.wrapper}>
            {p.children}
        </nav>
    );
};

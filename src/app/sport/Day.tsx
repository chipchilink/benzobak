'use client'

import Link from 'next/link';
import cn from 'classnames';
import { useHelped } from '@/app/state';
import style from './Day.module.scss';

export const Day = (p: {
    value: number;
    display: string;
}) => {
    const _ = useHelped();

    const onClick = () => {
        _.pushDay(p.value);
    };

    const section = _.getCurrentSection();
    const href = `/sport/${p.value}/${section}`;

    const className = cn(style.item, {
        '-active': _.getCurrentDay() === p.value,
    });

    return (
        <Link
            key={p.value}
            href={href}
            className={className}
            onClick={onClick}>
            {p.display}
        </Link>
    );
};

import Link from 'next/link';
import styled from './styled.module.scss';

export const Title = (p: { children: string }) => {
    return <h1 className={styled.title}>{p.children}</h1>
};

export const Description = (p: { children: string }) => {
    return <p>{p.children}</p>
};

export const File = (p: { href: string }) => {
    return (
        <Link href={`/${p.href}`} className={styled.file} />
    );
};

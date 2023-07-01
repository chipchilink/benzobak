import Link from 'next/link'
import { NavBar } from './NavBar';

export default (p: { children: React.ReactNode }) => {
    return (
        <>
            <NavBar />
            {p.children}
        </>
    );
};
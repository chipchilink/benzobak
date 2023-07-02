import { usePathname  } from 'next/navigation'

export const useActive = (href: string, level: number) => {
    const pathname = usePathname();
    const current = pathname.split('/')[level];
    const self = href.split('/')[level];
    return current === self;
};

import { usePathname  } from 'next/navigation'

export const useIsActive = (href: string) => {
    const pathname = usePathname();

    if(href === '/' && pathname !== href) return false;

    return pathname.startsWith(href);
};

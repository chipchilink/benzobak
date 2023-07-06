import * as React from 'react';

interface Ctx {
    current: {};
    put: (v: {}) => void;
}

const Ctx = React.createContext<Ctx | undefined>(undefined);

export const useRoute = () => {
    const ctx = React.useContext(Ctx);

    if(!ctx){
        throw new Error('route context not over');
    }

    return ctx;
};

export const index = {};

export const Routers = (p: { children: React.ReactNode }) => {
    const [current, put] = React.useState(index);

    return (
        <Ctx.Provider value={{ current, put }}>{p.children}</Ctx.Provider>
    );
};

export const IndexRoute = (p: { children: React.ReactNode }) => {
    const { current } = useRoute();
    if(current !== index) return null;
    return <>{p.children}</>;
};

export const Router = (p: {
    children: React.ReactNode;
    path: {};
}) => {
    const { current } = useRoute();
    if(current !== p.path) return null;

    return <>{p.children}</>;
};

export const Link = (p: React.HTMLAttributes<HTMLAnchorElement> & { to?: {}; forceHref?: string }) => {
    const { current, put } = useRoute();
    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        p.onClick?.(e);
        if(p.forceHref) return;
        const to = p.to ?? current;
        put(to);
        e.preventDefault();
    };

    const href = p.forceHref ?? '#';

    return <a {...p} onClick={onClick} href={href} />
};

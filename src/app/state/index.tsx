'use client'

import * as React from 'react';
import { usePathname } from 'next/navigation';
import * as Core from '@/app/core';

interface State {
    currentDay: number;
    currentSection: string;
}

const dayFromPathname = (pathname: string) => {
    const xs = pathname.split('/');

    switch(xs[1]){
        case 'sport':{
            return Number(xs[2]);
        }
        default: return null;
    }
};

const sectionFromPathname = (pathname: string) => {
    const xs = pathname.split('/');

    switch(xs[1]){
        case 'sport':{
            return xs[3];
        }
        default: return null;
    }
};

const getInitialState = (env: {
    pathname: string,
}): State => {
    return {
        currentDay: dayFromPathname(env.pathname) ?? Core.getFirstDay(),
        currentSection: sectionFromPathname(env.pathname) ?? Core.getFirstSection(),
    };
};

interface AppContext {
    state: State;
    modifyState: React.Dispatch<React.SetStateAction<State>>;
}

const AppContext = React.createContext<AppContext | undefined>(undefined);

export const useState = () => {
    const ctx = React.useContext(AppContext);

    if(!ctx){
        throw new Error('AppContext not wrapped app tree!');
    }

    return ctx;
};

export const State = (p: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [state, modifyState] = React.useState(() => getInitialState({ pathname }));

    return (
        <AppContext.Provider value={{ state, modifyState }}>
            {p.children}
        </AppContext.Provider>
    );
};

export const useHelped = () => {
    const ctx = useState();

    return {
        getCurrentDay: () => ctx.state.currentDay,
        pushDay: (d: number) => ctx.modifyState((s) => ({ ...s, currentDay: d })),
        getCurrentSection: () => ctx.state.currentSection,
        pushSection: (cs: string) => ctx.modifyState((s) => ({ ...s, currentSection: cs })),
    };
};

import * as S from './state/';
import * as _ from './core';

export const useSport = () => {
    const H = S.useHelped();

    const day = _.getFirstDay();
    const section = _.getFirstSection();

    const click = () => {
        H.pushDay(day);
        H.pushSection(section);
    };

    const path = `/sport/${day}/${section}`;

    return { path, click };
};

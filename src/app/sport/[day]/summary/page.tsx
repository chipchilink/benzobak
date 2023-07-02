'use client';

import * as UI from '@/ui';
import summary from '@/admin/summary.json';
import * as _ from '@/utils/data';
import { useHelped } from '@/app/state';

export default () => {
    const H = useHelped();
    const currentDay = H.getCurrentDay();

    const data = summary.findLast((itm) => {
        const day = _.normalizedDate(itm);
        return day === currentDay;
    });

    if(!data) return 'error';

    return (
        <>
            <UI.Title>Итоги соревнований за день</UI.Title>
            <UI.File href={data.pdf} />
        </>
    );
}
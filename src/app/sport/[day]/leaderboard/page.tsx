'use client'

import leaderboard from '@/admin/leaderboard.json';
import * as _ from '@/utils/data';
import { useHelped } from '@/app/state';
import table from './LeaderBoard.module.scss';

const errorRender = (day: number) => {
    const d = isNaN(day) ? '???' : day;
    return `Турнирная таблица в день ${d} не найдена!`;
};

export default () => {
    const H = useHelped();
    const currentDay = H.getCurrentDay();

    const data = leaderboard.findLast((itm) => {
        const day = _.normalizedDate(itm);
        return day === currentDay;
    });

    if(!data) return errorRender(currentDay);

    return (
        <table className={table.container}>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Команда</th>
                    <th>Итоги</th>
                </tr>
            </thead>
            <tbody>
                {data.board.map((row) => {
                    return (
                        <tr key={row.N} className={table.row}>
                            <td>{row.N}</td>
                            <td>{row.team}</td>
                            <td>{row.rate}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

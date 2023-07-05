import * as React from 'react';
import leaderboard from '../../../../admin/leaderboard.json'
import * as _ from '../../../../utils/data'
import { useHelped } from '../../../state'
import { ErrorByDay, byDay, findLast } from '../../../shared'
import table from './LeaderBoard.module.scss'

export default () => {
  const app = useHelped()
  const currentDay = app.sport.getCurrentDay()

  const data = findLast(byDay(currentDay))(leaderboard);

  if (!data)
    return (
      <ErrorByDay day={currentDay}>
        Результаты ещё не объявлены!
        <br /> Пожалуйста подождите
      </ErrorByDay>
    )

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
          )
        })}
      </tbody>
    </table>
  )
}

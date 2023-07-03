'use client'

import leaderboard from '@/admin/leaderboard.json'
import * as _ from '@/utils/data'
import { useHelped } from '@/app/state'
import { ErrorByDay, byDay } from '@/app/shared'
import table from './LeaderBoard.module.scss'

export default () => {
  const app = useHelped()
  const currentDay = app.sport.getCurrentDay()

  const data = leaderboard.findLast(byDay(currentDay))

  if (!data)
    return (
      <ErrorByDay day={currentDay}>
        Результаты ещё не объявлены!<br/> Пожалуйста подождите
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

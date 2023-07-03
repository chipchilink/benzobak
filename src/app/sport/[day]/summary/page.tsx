'use client'

import * as UI from '@/ui'
import summary from '@/admin/summary.json'
import * as _ from '@/utils/data'
import { useHelped } from '@/app/state'
import { ErrorByDay, byDay } from '@/app/shared'

export default () => {
  const app = useHelped()
  const currentDay = app.sport.getCurrentDay()

  const data = summary.findLast(byDay(currentDay))

  if (!data)
    return (
      <ErrorByDay day={currentDay}>
        Итоги ещё не подведены!
        <br /> Пожалуйста подождите
      </ErrorByDay>
    )

  return (
    <>
      <UI.Title style={{ marginTop: 20, marginBottom: 15 }}>
        Итоги соревнований за день
      </UI.Title>
      <UI.File href={data.pdf} />
    </>
  )
}

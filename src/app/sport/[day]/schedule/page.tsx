import * as React from 'react'
import schedule from '../../../../admin/schedule.json'
import { useHelped } from '../../../state'
import { Select } from '../../../components/Select'
import * as Unit from './Unit'
import { ErrorByDay, byDay, useSelect } from '../../../shared'

export const route = {};

export default () => {
  const app = useHelped()
  const currentDay = app.sport.getCurrentDay()

  const data = schedule.filter(byDay(currentDay))
  const { select, filteredData } = useSelect(data)

  if (data.length === 0)
    return (
      <ErrorByDay day={currentDay}>
        Расписание ещё не составлено!
        <br /> Пожалуйста подождите
      </ErrorByDay>
    )

  return (
    <>
      <Select {...select} />
      <div>
        {filteredData.map((item, i) => (
          <Unit.Unit key={i} {...item} />
        ))}
      </div>
    </>
  )
}

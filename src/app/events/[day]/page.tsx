import * as React from 'react'
import events from '../../../admin/events.json'
import { useHelped } from '../../state'
import { Select } from '../../components/Select'
import { ErrorByDay, byDay, useSelect } from '../../shared'
import * as Unit from './Unit'

export const route = {};

export default () => {
  const app = useHelped()
  const currentDay = app.event.getCurrentDay()

  const data = events.filter(byDay(currentDay))
  const { select, filteredData } = useSelect(data)

  if (data.length === 0)
    return (
      <ErrorByDay day={currentDay}>
        События ещё не объявлены!
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

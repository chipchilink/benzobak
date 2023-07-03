'use client'

import * as React from 'react'
import events from '@/admin/events.json'
import { useHelped } from '@/app/state'
import { Select } from '@/app/components/Select'
import { ErrorByDay, byDay, useSelect } from '@/app/shared'
import * as Unit from './Unit'

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

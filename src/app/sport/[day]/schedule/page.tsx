'use client'

import * as React from 'react'
import schedule from '@/admin/schedule.json'
import { useHelped } from '@/app/state'
import { Select } from '@/app/components/Select'
import * as Unit from './Unit'
import { ErrorByDay, byDay, dedup } from '@/app/shared'

const byLocation = (location: string | null) => (itm: Unit.Located) => {
  if (location === null) return true
  return itm.location === location
}

export default () => {
  const app = useHelped()
  const currentDay = app.sport.getCurrentDay()

  const data = schedule.filter(byDay(currentDay))
  const [location, setLocation] = React.useState<string | null>(null)

  if (data.length === 0)
    return (
      <ErrorByDay day={currentDay}>
        {(d) => `Расписания соревнований в день ${d} не найдено!`}
      </ErrorByDay>
    )

  const locations = dedup(
    data.map((itm) => ({ value: itm.location, display: itm.location }))
  )

  const pushLocation = (e: string | null) => {
    setLocation(e)
  }

  return (
    <>
      <Select
        data={locations}
        value={location}
        onChange={pushLocation}
        placeholder="Выбрать локацию"
      />
      <div>
        {data.filter(byLocation(location)).map((item, i) => (
          <Unit.Unit key={i} {...item} />
        ))}
      </div>
    </>
  )
}

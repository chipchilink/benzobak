import * as React from 'react';
import * as App from '../core/'
import { useHelped } from '../state'
import * as D from '../components/Day'
import * as NavBar from '../components/NavBar'
import { daymapper, navigate } from '../shared'

const Day = (p: { value: number; display: string }) => {
  const app = useHelped()

  const onClick = () => {
    app.event.pushDay(p.value)
  }

  const href = navigate.events.day(p.value)
  const isActive = app.event.getCurrentDay() === p.value

  return (
    <D.Day href={href} isActive={isActive} onClick={onClick}>
      {p.display}
    </D.Day>
  )
}

const Days = () => {
  return (
    <D.Container>
      {App.Events.getDays().map((day) => {
        const p = daymapper(day)
        return <Day key={p.value} {...p} />
      })}
    </D.Container>
  )
}

export default (p: { children: React.ReactNode }) => {
  const app = useHelped()

  const path = navigate.events.day(app.sport.getCurrentDay())

  return (
    <>
      <Days />
      <NavBar.Container>
        <NavBar.Item href={path} isActive>
          Мероприятия
        </NavBar.Item>
        <NavBar.Item href={'/fans'} isActive={false}>
          Болельщикам
        </NavBar.Item>
      </NavBar.Container>
      {p.children}
    </>
  )
}

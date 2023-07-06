import * as React from 'react';
import * as App from '../core/'
import * as NavBar from '../components/NavBar'
import * as D from '../components/Day'
import { useHelped } from '../state'
import { daymapper } from '../shared'
import * as route from '../routers'

const sectionMapper = (value: string) => {
  switch (value) {
    case 'schedule':
      return {
        display: 'Расписание',
        route: route.schedule,
      }
    case 'leaderboard':
      return {
        display: 'Турнирная таблица',
        route: route.leaderboard,
      }
    case 'summary':
      return {
        display: 'Итоги',
        route: route.summary,
      }
    default: {
      throw new Error(`Секции ${value} не существует!`)
    }
  }
}

const Day = (p: { value: number; display: string }) => {
  const app = useHelped()

  const onClick = () => {
    app.sport.pushDay(p.value)
  }

  const isActive = app.sport.getCurrentDay() === p.value

  return (
    <D.Day isActive={isActive} onClick={onClick}>
      {p.display}
    </D.Day>
  )
}

const Days = () => {
  return (
    <D.Container>
      {App.Sport.getDays().map((day) => {
        const p = daymapper(day)
        return <Day key={p.value} {...p} />
      })}
    </D.Container>
  )
}

const Item = (p: { section: string }) => {
  const app = useHelped()

  const onClick = () => {
    app.sport.pushSection(p.section)
  }

  const isActive = p.section === app.sport.getCurrentSection()
  const { route, display } = sectionMapper(p.section);

  return (
    <NavBar.Item onClick={onClick} isActive={isActive} href={route}>
      {display}
    </NavBar.Item>
  )
}

export default (p: { children: React.ReactNode }) => {
  const sections = App.Sport.getSections()

  return (
    <div>
      <Days />
      <NavBar.Container>
        {sections.map((section) => (
          <Item key={section} section={section} />
        ))}
      </NavBar.Container>
      {p.children}
    </div>
  )
}

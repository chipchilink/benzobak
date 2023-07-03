'use client'

import * as App from '@/app/core/'
import * as NavBar from '@/app/components/NavBar'
import * as D from '@/app/components/Day'
import { useHelped } from '@/app/state'
import { daymapper, navigate } from '@/app/shared'

const sectionMapper = (value: string) => {
  switch (value) {
    case 'schedule':
      return 'Расписание'
    case 'leaderboard':
      return 'Турнирная таблица'
    case 'summary':
      return 'Итоги'
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

  const section = app.sport.getCurrentSection()
  const href = navigate.sport.day(p.value).page(section)
  const isActive = app.sport.getCurrentDay() === p.value

  return (
    <D.Day href={href} isActive={isActive} onClick={onClick}>
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

  const href = navigate.sport.day(app.sport.getCurrentDay()).page(p.section)
  const isActive = p.section === app.sport.getCurrentSection()

  return (
    <NavBar.Item
      href={href}
      onClick={onClick}
      isActive={isActive}
    >
      {sectionMapper(p.section)}
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

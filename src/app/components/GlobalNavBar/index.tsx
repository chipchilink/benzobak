import * as React from 'react'
import cn from 'classnames'
import { Link, useRoute, index } from '../../Route'
import { useSport, useEvent } from '../../shared'
import * as Core from '../../core'
import * as route from '../../routers'
import { useHelped } from '../../state'
import nav from './styles.module.scss'

export const useSection = (value: string) => {
  const app = useHelped();
  const sport = useSport()
  const events = useEvent()

  switch (value) {
    case 'main':
      return {
        display: 'Главная',
        route: index,
        onClick: () => {
          app.main.pushMainSection('main');
        },
      }
    case 'sport':
      return {
        display: 'Спорт',
        route: route.schedule,
        onClick: () => {
          sport.click();
          app.main.pushMainSection('sport');
        },
      }
    case 'navigation':
      return {
        display: 'Навигация',
        route: route.navigation,
        onClick: () => {
          app.main.pushMainSection('navigation');
        },
      }
    case 'events':
      return {
        display: 'Мероприятия',
        route: route.events,
        onClick: () => {
          events.click();
          app.main.pushMainSection('events');
        },
      }
    default:
      return null;
  }
}

const Item = (p: {
  id: string
}) => {
  const section = useSection(p.id);
  const app = useHelped();
  if(section === null) return null;
  const isActive = p.id === app.main.getCurrentSection()

  const className = cn(nav.item, {
    '-active': isActive,
  })
  return (
    <Link id={p.id} to={section.route} className={className} onClick={section.onClick}>
      {section.display}
    </Link>
  )
}

export const NavBar = () => {
  const route = useRoute();

  if (route.current === index) return null

  return (
    <div className={nav.wrapper}>
      <div className={nav.container}>
        {Core.Main.getSections().map((section) => {
          return (
            <Item id={section} />
          );
        })}
      </div>
    </div>
  )
}

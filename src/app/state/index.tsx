import * as React from 'react'
import { useLocation } from 'react-router-dom'
import * as Core from '../../app/core'

interface State {
  currentSportDay: number
  currentSportSection: string
  currentEventDay: number
}

namespace Sport {
  export const dayFromPathname = (pathname: string) => {
    const xs = pathname.split('/')

    switch (xs[1]) {
      case 'sport': {
        return Number(xs[2])
      }
      default:
        return null
    }
  }

  export const sectionFromPathname = (pathname: string) => {
    const xs = pathname.split('/')

    switch (xs[1]) {
      case 'sport': {
        return xs[3]
      }
      default:
        return null
    }
  }
}

namespace Event {
  export const dayFromPathname = (pathname: string) => {
    const xs = pathname.split('/')

    switch (xs[1]) {
      case 'events': {
        return Number(xs[2])
      }
      default:
        return null
    }
  }
}

const getInitialState = (env: { pathname: string }): State => {
  return {
    currentSportDay:
      Sport.dayFromPathname(env.pathname) ?? Core.Sport.getFirstDay(),
    currentSportSection:
      Sport.sectionFromPathname(env.pathname) ?? Core.Sport.getFirstSection(),
    currentEventDay:
      Event.dayFromPathname(env.pathname) ?? Core.Events.getFirstDay(),
  }
}

interface AppContext {
  state: State
  modifyState: React.Dispatch<React.SetStateAction<State>>
}

const AppContext = React.createContext<AppContext | undefined>(undefined)

export const useState = () => {
  const ctx = React.useContext(AppContext)

  if (!ctx) {
    throw new Error('AppContext not wrapped app tree!')
  }

  return ctx
}

export const State = (p: { children: React.ReactNode }) => {
  const { pathname } = useLocation()
  const [state, modifyState] = React.useState(() =>
    getInitialState({ pathname })
  )

  return (
    <AppContext.Provider value={{ state, modifyState }}>
      {p.children}
    </AppContext.Provider>
  )
}

export const useHelped = () => {
  const ctx = useState()

  return {
    sport: {
      getCurrentDay: () => ctx.state.currentSportDay,
      pushDay: (d: number) =>
        ctx.modifyState((s) => ({ ...s, currentSportDay: d })),
      getCurrentSection: () => ctx.state.currentSportSection,
      pushSection: (cs: string) =>
        ctx.modifyState((s) => ({ ...s, currentSportSection: cs })),
    },
    event: {
      getCurrentDay: () => ctx.state.currentEventDay,
      pushDay: (d: number) =>
        ctx.modifyState((s) => ({ ...s, currentEventDay: d })),
    },
  }
}

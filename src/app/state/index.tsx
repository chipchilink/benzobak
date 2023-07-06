import * as React from 'react'
import * as Core from '../../app/core'

interface State {
  currentMain: string
  currentSportDay: number
  currentSportSection: string
  currentEventDay: number
}

const getInitialState = (): State => {
  return {
    currentMain: Core.Main.getFirstSection(),
    currentSportDay: Core.Sport.getFirstDay(),
    currentSportSection: Core.Sport.getFirstSection(),
    currentEventDay: Core.Events.getFirstDay(),
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
  const [state, modifyState] = React.useState(() =>
    getInitialState()
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
    main: {
      getCurrentSection: () => ctx.state.currentMain,
      pushMainSection: (ms: string) => ctx.modifyState((s) => ({ ...s, currentMain: ms })),
    },
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

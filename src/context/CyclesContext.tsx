import { createContext, useState } from 'react'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interrupedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  secondsPassed: number
  setPassedSeconds: (seconds: number) => void
  markCurrentCycleAsFinished: () => void
}

function setPassedSeconds(seconds: number) {
  setSecondsPassed(seconds)
}

function markCurrentCycleAsFinished() {
  setCycles((state) =>
    state.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, finishedDate: new Date() }
      } else {
        return cycle
      }
    }),
  )
}

export const CyclesContext = createContext({} as CyclesContextType)

export function CyclesContexProvider() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [secondsPassed, setSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId,
        markCurrentCycleAsFinished,
        secondsPassed,
        setPassedSeconds,
      }}
    ></CyclesContext.Provider>
  )
}

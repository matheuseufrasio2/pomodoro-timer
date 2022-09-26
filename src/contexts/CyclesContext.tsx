import { createContext, ReactNode, useState } from 'react';

export interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextData {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  // eslint-disable-next-line no-unused-vars
  setSecondsPassed: (seconds: number) => void;
  interruptCurrentCycle: () => void;
  // eslint-disable-next-line no-unused-vars
  createNewCycle: (data: CreateCycleData) => void;
}

interface CyclesContextProviderProps {
  children: ReactNode;
}

export const CyclesContext = createContext({} as CyclesContextData);

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  function markCurrentCycleAsFinished() {
    setCycles((prevState) => prevState.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date() };
      }
      return cycle;
    }));

    setActiveCycleId(null);
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewCycle({ minutesAmount, task }: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task,
      minutesAmount,
      startDate: new Date(),
    };

    setCycles((prevState) => [...prevState, newCycle]);
    setActiveCycleId(newCycle.id);
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    setCycles((prevState) => prevState.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return { ...cycle, interruptedDate: new Date() };
      }
      return cycle;
    }));

    setActiveCycleId(null);
  }

  return (
    <CyclesContext.Provider value={{
      cycles,
      activeCycle,
      activeCycleId,
      amountSecondsPassed,
      markCurrentCycleAsFinished,
      setSecondsPassed,
      createNewCycle,
      interruptCurrentCycle,
    }}
    >
      {children}
    </CyclesContext.Provider>
  );
}

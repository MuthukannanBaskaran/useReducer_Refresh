import { createContext, useReducer, type Dispatch, type ReactNode } from "react";
import { CounterReducer, countInitialState } from "../reducer/CounterReducer";
import type { CounterState, CounterActionType } from "../types/type";

type CounterContextType = {
    stateCounter: CounterState;
    dispatchCounter: Dispatch<CounterActionType>;
};

const CounterContext = createContext<CounterContextType>({
    stateCounter: { count: 0 },
    dispatchCounter: () => null // temporary fallback (ignored after provider)
});

export const CounterProvider = ({ children }: { children: ReactNode }) => {
    const [stateCounter, dispatchCounter] = useReducer(CounterReducer, countInitialState)
    return (
        <CounterContext.Provider value={{ stateCounter, dispatchCounter }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContext;
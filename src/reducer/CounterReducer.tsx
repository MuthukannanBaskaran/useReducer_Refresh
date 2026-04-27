import type { CounterActionType, CounterState } from "../types/type";
import { CounterActions } from "../types/type";

export const countInitialState: CounterState = {
    count: 0
};

export const CounterReducer = (
    stateCounter: CounterState,
    actionCounter: CounterActionType
): CounterState => {
    switch (actionCounter.type) {
        case CounterActions.INCREMENT:
            return { count: stateCounter.count + 1 };

        case CounterActions.DECREMENT:
            return { count: stateCounter.count - 1 };

        case CounterActions.RESET:
            return { count: 0 };

        default:
            return stateCounter;
    }
};
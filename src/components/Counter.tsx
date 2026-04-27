import { useContext } from "react";
import CounterContext from "../context/CounterContext";
import { CounterActions } from "../types/type";

export const Counter = () => {
    const { stateCounter, dispatchCounter } = useContext(CounterContext);
    console.log(stateCounter)
    return (
        <div>
            <p>Counter: {stateCounter.count}</p>
            <button
                onClick={() => dispatchCounter({ type: CounterActions.INCREMENT })}>
                {CounterActions.INCREMENT}</button>
            <button
                onClick={() => dispatchCounter({ type: CounterActions.DECREMENT })}>
                {CounterActions.DECREMENT}</button>
            <button
                onClick={() => dispatchCounter({ type: CounterActions.RESET })}>
                {CounterActions.RESET}</button>
        </div>
    )
}

export default Counter;
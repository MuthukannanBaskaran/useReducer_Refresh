import axios from "axios";
import { useReducer } from "react";
import type { type_Person } from "../types/type";
import { fetchInitialState, reducer } from "../reducer/Reducer";
import { PersonCardByReducer } from "./PersonCardByReducer";

const reducerActions = {
    START: "START",
    SUCCESS: "SUCCESS",
    FAIL: "FAIL"
} as const;

const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, fetchInitialState);
    const { person, error, loading } = state;

    const getPerson = async () => {
        try {
            dispatch({ type: reducerActions.START })
            const response = await axios.get('https://randomuser.me/api/');
            const data = await response.data;
            dispatch({ type: reducerActions.SUCCESS, payload: data.results[0] })
        }
        catch (error) {
            console.log('getPerson Error', error)
            dispatch({ type: reducerActions.FAIL, payload: 'getPerson Error: ' + error })
        }
    }

    return (
        <>
            <button onClick={getPerson}>Get Person - Reducer</button >
            <div>
                {person && <PersonCardByReducer person={person} />}
            </div>
        </>
    )
}

export default UseReducerExample
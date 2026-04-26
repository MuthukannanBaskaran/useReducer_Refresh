import axios from "axios";
import { useState } from "react";
import { PersonCard } from "./PersonCard";
import type { type_Person } from "../types/type";

const UseReducerExample = () => {
    const [person, setPerson] = useState<type_Person | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState<boolean>(false);

    const getPerson = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://randomuser.me/api/');
            const data = await response.data;
            setPerson(data.results[0])
            setError("");
        }
        catch (error) {
            console.log('getPerson Error', error)
            setError('getPerson Error: ' + error)
        }
        finally {
            setLoading(false);
            console.log(person)
        }
    }

    return (
        <>
            <button disabled={loading} className={`${loading ? "button_disabled" : "button_enabled"}`}
                onClick={getPerson}>click to Get Person</button >
            <div>
                {error && <h1>{error}</h1>}
                {person && <PersonCard person={person} />}
            </div>
        </>
    )
}

export default UseReducerExample
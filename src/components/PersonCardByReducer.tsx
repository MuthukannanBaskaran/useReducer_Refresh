import type { type_Person } from "../types/type"

export const PersonCardByReducer = ({ person }: { person: type_Person }) => {
    return (
        <>
            <div>Person Card by State</div>
            <img src={person.picture.large} alt="person" />
            <p>{`${person.name.title}. ${person.name.first} ${person.name.last}`}</p>
        </>
    )
}

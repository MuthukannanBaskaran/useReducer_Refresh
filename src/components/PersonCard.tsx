import type { type_Person } from "../types/type"

export const PersonCard = ({ person }: { person: type_Person }) => {
    return (
        <>
            <div>PersonCard</div>
            <img src={person.picture.large} alt="person" />
            <p>{`${person.name.title}. ${person.name.first} ${person.name.last}`}</p>
        </>
    )
}

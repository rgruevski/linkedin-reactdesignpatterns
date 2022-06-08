import React from "react";
export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;
    return (
        <>
            <p>{name}</p>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <p>Hobbies:</p>
            <ul>{hobbies?.map((hobby, i) => (<li key={i}>{hobby}</li>)) ?? []}</ul>
        </>
    );
};
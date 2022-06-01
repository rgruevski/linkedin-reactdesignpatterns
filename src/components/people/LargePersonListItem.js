import React from "react";
export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;
    return (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h5>Hobbies:</h5>
            <ul>{hobbies?.map((hobby, i) => (<li key={i}>{hobby}</li>)) ?? []}</ul>
        </>
    );
};
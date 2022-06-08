import React from "react";

export const UserInfo = ({ user }) => {
    const { name, age, hairColor, hobbies } = user || {};
    return user ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age} years</p>
            <p>Hair Color: {hairColor}</p>
            <h3>Hobbies:</h3>
            <ul>{hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}</ul>
        </>
    ) : (<h3>Loading Current User...</h3>)
};
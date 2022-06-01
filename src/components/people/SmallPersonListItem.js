import React from "react";
export const SmallPersonListItem = ({ person }) => {
    const { name, age } = person;
    return (
        <p>
            Name: {name}
            <br />
            Age: {age}
        </p>
    );
};
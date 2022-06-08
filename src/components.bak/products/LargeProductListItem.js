import React from "react";
export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (
        <>
            <p><b>{name}</b></p>
            <p>{price}</p>
            <p><b>Description:</b></p>
            <p>{description}</p>
            <p><b>Rating:</b></p>
            <p>{rating}</p>
        </>
    );
};
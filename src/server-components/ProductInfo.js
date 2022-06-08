import React from "react";
export const ProductInfo = ({ product }) => {
    const { name, price, description, rating } = product || {};
    return product ? (
        <>
            <p><b>{name}</b></p>
            <p>{price}</p>
            <p><b>Description:</b></p>
            <p>{description}</p>
            <p><b>Rating:</b></p>
            <p>{rating}</p>
        </>
    ) : <h3>Loading Current Product...</h3>;
};
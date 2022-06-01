export const LargeProductListItem = ({ product }) => {
    const { name, price, description, rating } = product;
    return (
        <h3>
            {name}
            {price}
            <h4>Description:</h4>
            {description}
            <h4>Rating:</h4>
            {rating}
        </h3>
    );
};
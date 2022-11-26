import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  const { title, price, description, image, _id } = product;
  return (
    <summary>
      <img src={`img/${image}`} alt={title} />
      <h3>
        <Link to={_id}>{title}</Link>
      </h3>
      <p>{description}</p>
      <small>Price: {price}</small>
    </summary>
  );
}

export default Product;

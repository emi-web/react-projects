import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  if (!product) return null;
  return (
    <div className="product">
      <img src={product.image} />
      <div>
        <h4>Title:{product.title}</h4>
        <p>Category:{product.category}</p>
        <p>Description:{product.description}</p>
        <Link className="more" to={`/item/${product.id}`}>
          More
        </Link>
      </div>
    </div>
  );
};

export default Item;

import React, { useEffect, useState } from "react";
import data from "../data/MOCK_DATA.json";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  const askProducts = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  useEffect(() => {
    askProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.length > 0 &&
        products.map((products) => {
          return (
            <div>
              <img src={products.image} alt={products[0]} />
              <h2>{products.name}</h2>
              <p>{products.description}</p>
              <p>${products.price}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ItemListContainer;

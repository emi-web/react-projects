import { use, useEffect, useState } from "react";
import { askData } from "./askData";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const category = useParams().category;

  useEffect(() => {
    askData().then((res) => {
      if (category) {
        setProducts(res.filter((prod) => prod.category === category));
      } else {
        setProducts(res);
      }
    });
  }, []);
  return (
    <div>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;

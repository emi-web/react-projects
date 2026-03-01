import React, { useEffect, useState } from "react";
import { askItemId } from "./askData";
import ItemDetail from "./ItemDetail"; // ✅ SIN llaves
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    askItemId(Number(id)).then((res) => {
      setItem(res);
    });
  }, [id]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDetailContainer;

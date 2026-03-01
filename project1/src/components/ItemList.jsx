import Item from "../components/Item";
const ItemList = ({ products }) => {
  console.log(products);

  return (
    <div className="container">
      <h2 className="main-title">Products</h2>
      <div className="products">
        {products.map((p) => (
          <Item key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;

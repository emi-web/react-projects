const ItemDetail = ({ item }) => {
  return (
    <div className="container">
      <div className="product-Details">
        <img src={item.image} alt={item.title} />
        <div>
          <h3 className="title">{item.title}</h3>
          <p className="description">{item.title}</p>
          <p className="category">Category:{item.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

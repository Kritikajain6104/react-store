import "./Product.css";

function Product({ id, name, image, handleAddToCart }) {
  return (
    <div className="product">
      <img src={require(`./../../assets/${image}`)} alt={name} />
      <div className="product-name">{name}</div>
      <button onClick={() => handleAddToCart(name, image, id)}>
        Add to Cart
      </button>
    </div>
  );
}
function Products({ cartItems, handleAddToCart, products }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          handleAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

export default Products;

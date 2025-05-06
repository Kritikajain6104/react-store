import Modal from "../UI/Modal";
import "./Cart.css";

function CartItem({
  id,
  name,
  image,
  quantity,
  handleDecQuantity,
  handleIncQuantity,
}) {
  return (
    <div className="cart-item">
      <img src={require(`../../assets/${image}`)} alt={name} />
      <span>{name}</span>
      <span>Qty: {quantity}</span>
      <button onClick={() => handleIncQuantity(id)}>+</button>
      <button onClick={() => handleDecQuantity(id)}>-</button>
    </div>
  );
}
function Cart({
  closeCart,
  showCart,
  cartItems,
  handleDecQuantity,
  handleIncQuantity,
}) {
  return (
    <Modal onClose={closeCart} show={showCart}>
      <div className="cart-container">
        <div className="cart-heading">Cart</div>
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
              handleDecQuantity={handleDecQuantity}
              handleIncQuantity={handleIncQuantity}
            />
          ))
        )}
      </div>
      <div className="cart-buttons">
        <button onClick={closeCart}>Close</button>
        {cartItems.length >= 1 && <button onClick={closeCart}>Checkout</button>}
      </div>
    </Modal>
  );
}

export default Cart;

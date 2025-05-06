import "./Header.css";

function Header({ openCart, openAdd }) {
  return (
    <ul>
      <li id="title">
        <h2>React Store</h2>
      </li>
      <div>
        <li id="space">
          <button onClick={openAdd}>Add Products</button>
        </li>
        <li>
          <button onClick={openCart}>Cart</button>
        </li>
      </div>
    </ul>
  );
}

export default Header;

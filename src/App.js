import Header from "./components/Header/Header";
import Products from "./components/Products/Product";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import AddProd from "./components/AddProd/AddProd";
import productData from "./data/products.json";
import React from "react";
function App() {
  const [showCart, setShowCart] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(productData);
  //one way
  const openCart = () => setShowCart(true);
  //another way
  function closeCart() {
    setShowCart(false);
  }
  function handleAddToCart(prodname, prodimage, prodid) {
    const ind = cartItems.findIndex((item) => item.id === prodid);
    if (ind === -1) {
      const cartItem = {
        id: prodid,
        name: prodname,
        image: prodimage,
        quantity: 1,
      };
      setCartItems((state) => [...state, cartItem]);
    } else {
      const updatedCart = [...cartItems];
      updatedCart[ind].quantity++;
      setCartItems(updatedCart);
    }
  }
  function handleIncQuantity(prodid) {
    const ind = cartItems.findIndex((item) => item.id === prodid);
    const updatedCart = [...cartItems];
    updatedCart[ind].quantity++;
    setCartItems(updatedCart);
  }
  function handleDecQuantity(prodid) {
    const ind = cartItems.findIndex((item) => item.id === prodid);
    let updatedCart = [...cartItems];
    updatedCart[ind].quantity--;
    if (updatedCart[ind].quantity === 0) {
      updatedCart = updatedCart.filter((item, index) => index !== ind);
    }
    setCartItems(updatedCart);
  }

  function openAdd() {
    setShowAdd(true);
  }
  function closeAdd() {
    setShowAdd(false);
  }
  return (
    <>
      <Header openCart={openCart} openAdd={openAdd}></Header>
      <Products
        cartItems={cartItems}
        handleAddToCart={handleAddToCart}
        products={products}
      />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        handleDecQuantity={handleDecQuantity}
        handleIncQuantity={handleIncQuantity}
      ></Cart>
      <AddProd
        showAdd={showAdd}
        close={closeAdd}
        products={products}
        setProducts={setProducts}
      ></AddProd>
    </>
  );
}

export default App;

import Modal from "../UI/Modal";
import "./AddProd.css";
import { useRef } from "react";
function AddProd({ showAdd, close, products, setProducts }) {
  const nameRef = useRef();

  function handleAddProd(event) {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    console.log(nameValue);
    const product = {
      id: products.length + 1,
      name: nameValue,
      image: "default_prod.jpg",
    };
    let updatedProducts = [...products, product];
    setProducts(updatedProducts);
    close();
  }

  return (
    <Modal show={showAdd} onClose={close}>
      <div>Add Product</div>
      <div>
        <form id="userForm" onSubmit={handleAddProd}>
          <label>
            Product Name:{" "}
            <input
              type="text"
              id="name"
              name="prodName"
              ref={nameRef}
              required
            />
          </label>

          <button type="submit">Add Product</button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProd;

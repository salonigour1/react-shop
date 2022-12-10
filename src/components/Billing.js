import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Navbar from "./Navbar";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
function Billing() {
  const [total, setTotal] = useState(0);
  const { allProducts, setAllProducts } = useGlobalContext();

  const { product, cart } = allProducts;
  // console.log(allProducts);

  useEffect(() => {
    const total = cart.reduce(
      (total, curr) => total + Number(curr.price) * Number(curr.qty),
      0
    );
    setTotal(total);
  }, [cart]);

  const handleRemoveFromCart = (id) => {
    setAllProducts({
      product: product,
      cart: cart.filter((curr) => curr.id !== id),
    });
  };

  const handleQuantity = (value, id) => {
    // console.log(typeof Number(value));
    setAllProducts({
      product: product,
      cart: cart.map((curr) =>
        curr.id === id ? { ...curr, qty: Number(value) } : curr
      ),
    });
    // console.log(temp.cart[0]);
  };

  return (
    <div className="checkout">
      <Navbar />
      <div className="btn">
        <Link to="/" className="productDetail__Details--btn">
          Continue Shopping
        </Link>
      </div>
      <div className="contain">
        <div className="cartList">
          {cart.length === 0 ? (
            <div className="cartEmpty">Cart Is Empty</div>
          ) : (
            cart.map((curr, index) => {
              // console.log(curr.name, curr.price);
              return (
                <div className="cart_item">
                  <img src={curr.image} alt={curr.name} />
                  <div className="item_detail">
                    <p>{curr.name}</p>
                    <p>Rs: {curr.price}</p>
                    <form
                      onClick={(e) => handleQuantity(e.target.value, curr.id)}
                    >
                      <label id="quantity">Quantity:</label>
                      <select id="quantity">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </form>
                  </div>
                  <AiFillDelete
                    color="purple"
                    fontSize="40px"
                    onClick={() => handleRemoveFromCart(curr.id)}
                  />
                </div>
              );
            })
          )}
        </div>
        <div className="summary">
          <h1>Total Item {cart.length}</h1>
          <p>Total: {total}</p>
          <Link to="/" className="productDetail__Details--btn">
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Billing;

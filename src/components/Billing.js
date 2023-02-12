import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import Navbar from "./Navbar";
import { AiFillDelete } from "react-icons/ai";
import "./style.css";
import { RiDeleteBinLine } from "react-icons/ri";
import EmptyCart from "./EmptyCart";
import checkout from "./checkout.jpg";
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
  console.log(cart);
  const handleRemoveFromCart = (id) => {
    setAllProducts({
      product: product,
      cart: cart.filter((curr) => curr.id !== id),
    });
  };
  const [count, setCount] = useState(1);
  const handleIncrease = (id, qty) => {
    console.log(cart);
    // setCount((count) => count + 1);
    setAllProducts({
      product: product,
      cart: cart.map((curr) => {
        console.log(curr);
        return curr.id === id ? { ...curr, qty: curr.qty + 1 } : curr;
      }),
    });
  };
  const handleDecrease = (id, qty) => {
    if (qty <= 1) return;
    setAllProducts({
      product: product,
      cart: cart.map((curr) => {
        return curr.id === id ? { ...curr, qty: curr.qty - 1 } : curr;
      }),
    });
  };
  const handleQuantity = (value, id) => {
    // console.log(typeof Number(value));
    setAllProducts({
      product: product,
      cart: cart.map((curr) =>
        curr.id === id ? { ...curr, qty: Number(count) } : curr
      ),
    });
    // console.log(temp.cart[0]);
  };
  const numberWithCommas = (num) => {
    let price = Number(num);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <>
      <Navbar />
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="billing">
          {/* <div className="billing_heading">My Bag</div> */}
          <div className="billing_content">
            <div className="billing_items">
              <table>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Total</th>
                  <th></th>
                </tr>
                {cart.map((curr) => (
                  <tr>
                    <td>
                      <div className="billing_products">
                        <img
                          className="billing_img"
                          src={curr.image}
                          alt={curr.name}
                        />
                        <div className="billing_item">
                          <div className="product_name">{curr.name}</div>
                          <div>{curr.company}</div>
                        </div>
                      </div>
                    </td>

                    <td className="billing_price">
                      Rs {numberWithCommas(curr.price)}
                    </td>
                    <td>
                      <div className="quantity">
                        <div onClick={() => handleDecrease(curr.id, curr.qty)}>
                          -
                        </div>
                        <div>{curr.qty}</div>
                        <div onClick={() => handleIncrease(curr.id, curr.qty)}>
                          +
                        </div>
                      </div>
                    </td>
                    <td className="billing_price">
                      Rs{" "}
                      {numberWithCommas(Number(curr.price) * Number(curr.qty))}{" "}
                    </td>
                    <td>
                      {" "}
                      <RiDeleteBinLine
                        color="black"
                        fontSize="25px"
                        onClick={() => handleRemoveFromCart(curr.id)}
                      />
                    </td>
                  </tr>
                ))}
              </table>
              <div className="billing_btn">
                <div className="cart_button">
                  <Link to="/" className="link">
                    Continue Shopping
                  </Link>
                </div>
                <div className="cart_button">
                  <Link to="/" className="link">
                    Proceed To CheckOut
                  </Link>
                </div>
              </div>
            </div>
            <div className="billing_total">
              <div className="sub_title">
                THERE ARE {cart.length} ITEMS IN YOUR CART
              </div>
              <div className="all_title">
                Total : Rs {numberWithCommas(total)}
              </div>
              <div className="sub_title">
                SHIPPING : Shipping & taxes calculated at checkout
              </div>
              <img src={checkout} />
            </div>
          </div>
        </div>

        // <div className="">
        //   <div className="quantity">
        //     <div onClick={handleDecrease}>-</div>
        //     <div>{count}</div>
        //     <div onClick={handleIncrease}>+</div>
        //   </div>
        //   <div className="cart_button">
        //     <Link to="/" className="link">
        //       Continue Shopping
        //     </Link>
        //   </div>
        //   <div>My Bag</div>
        //   <div className="contain">
        //     <div className="cartList">
        //       {cart.length === 0 ? (
        //         <div className="cartEmpty">Cart Is Empty</div>
        //       ) : (
        //         cart.map((curr, index) => {
        //           // console.log(curr.name, curr.price);
        //           return (
        //             <div className="cart_item">
        //               <img src={curr.image} alt={curr.name} />
        //               <div className="item_detail">
        //                 <p>{curr.name}</p>
        //                 <p>Rs: {curr.price}</p>
        //                 <form
        //                   onClick={(e) =>
        //                     handleQuantity(e.target.value, curr.id)
        //                   }
        //                 >
        //                   <label id="quantity">Quantity:</label>
        //                   <select id="quantity">
        //                     <option value="1">1</option>
        //                     <option value="2">2</option>
        //                     <option value="3">3</option>
        //                     <option value="4">4</option>
        //                   </select>
        //                 </form>
        //               </div>
        //               <AiFillDelete
        //                 color="purple"
        //                 fontSize="40px"
        //                 onClick={() => handleRemoveFromCart(curr.id)}
        //               />
        //             </div>
        //           );
        //         })
        //       )}
        //     </div>
        //     <div className="summary">
        //       <h1>Total Item {cart.length}</h1>
        //       <p>Total: {total}</p>
        //       <Link to="/" className="productDetail__Details--btn">
        //         Check Out
        //       </Link>
        //     </div>
        //   </div>{" "}
        // </div>
      )}
    </>
  );
}

export default Billing;

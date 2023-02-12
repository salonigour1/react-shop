import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="emptyCart">
      <div className="all_title">Empty Cart</div>
      <div className="sub_title">
        Before proceeding to checkout you must add some products to your
        shopping cart. You will find a lot of interesting products on our "Shop"
        page.
      </div>
      <div className="cart_button size">
        <Link to="/" className="link">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;

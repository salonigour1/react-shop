import React, { useEffect } from "react";
import "./style.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from "../context/context";
const Navbar = () => {
  // useEffect(() => {
  //   setAllProducts({
  //     product: [...allProducts.product],
  //     cart: [...allProducts.cart, { a: "a", b: "bc" }],
  //   });
  // }, []);

  const {
    allProducts: { cart },
    filter,
    setFilter,
  } = useGlobalContext();

  const { bySearch } = filter;

  const handleSearch = (e) => {
    e.preventDefault();
    setFilter({ ...filter, bySearch: e.target.value });
  };

  return (
    <header>
      <div className="navbar">
        <div>
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </div>
        <div className="sideLink">
          <div>
            <Link className="navlink" to="/">
              Home
            </Link>
          </div>
          <div>
            <Link className="navlink" to="/about">
              About
            </Link>
          </div>
          <div>
            <Link className="navlink" to="/contact">
              Contact
            </Link>
          </div>
          <Link to="/checkout" className="navbar__cart">
            <FiShoppingCart className="cartIcon" />
            <span className="navbar__cartcount">{cart.length}</span>
          </Link>
        </div>

        {/* <span>
            <FiShoppingCart className="shopping-icon" /> */}
        {/* <Link to="/checkout" className="navlink "> */}

        {/* <FiShoppingCart className="shopping-icon" /> */}
        {/* <span className="item-no">{cart.length}</span>
         */}
        {/* </Link> */}
        {/* </span> */}
      </div>
    </header>
    // <header className="navbar">
    //   <div>
    //     <Link to="/">
    //       <img src={logo} className="logo" />
    //     </Link>
    //   </div>
    //   <div>
    //     <Link className="navlink" to="/">
    //       Home
    //     </Link>
    //     <Link className="navlink" to="/about">
    //       About
    //     </Link>
    //     <Link className="navlink" to="/contact">
    //       Contact
    //     </Link>
    //     <div className="cart-icon">
    //       <Link to="/checkout" className="navlink ">Okk
    //         {/* <FiShoppingCart className="shopping-icon" /> */}
    //         {/* <span className="item-no">{cart.length}</span>
    //          */}
    //       </Link>
    //     </div>

    //     {/* <input
    //     type="text"
    //     placeholder="Search here..."
    //     onChange={(e) => {
    //       handleSearch(e);
    //     }}
    //       /> */}
    //   </div>
    // </header>
  );
};

export default Navbar;

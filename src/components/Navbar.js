import React, { useEffect } from "react";
import "./style.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
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
    <header className="navbar">
      <Link to="/">
        <img src={logo} className="logo" />
      </Link>

      <input
        type="text"
        placeholder="Search here..."
        onChange={(e) => {
          handleSearch(e);
        }}
      />

      <Link to="/checkout" className="cart-icon">
        <span className="item-no">{cart.length}</span>
        <FaShoppingCart className="shopping-icon" />
      </Link>
    </header>
  );
};

export default Navbar;

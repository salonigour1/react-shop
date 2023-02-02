import React, { useEffect } from "react";
import "./styles.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
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
      <div className="Navbar">
        <div>
          <Link to="/" className="logo">
            WEB<span className="x">X</span>
          </Link>
        </div>
        <div className="resp_menu">
          <Link to="/checkout" className="cart_button">
            <FiShoppingCart size="20px" /> <span>({cart.length})</span>
          </Link>
          <div>
            <GiHamburgerMenu size="35px" />
          </div>
        </div>
        <div className="Menu">
          <div>
            <Link className="menu_link" to="/">
              Home
            </Link>
          </div>

          <div>
            <Link className="menu_link" to="/product">
              Shop
            </Link>
          </div>
          <div>
            <Link className="menu_link" to="/about">
              About&nbsp;US
            </Link>
          </div>
          <div>
            <Link className="menu_link" to="/contact">
              Contact&nbsp;US
            </Link>
          </div>
        </div>
        <div className="cart">
          <Link className="cartMenu">
            <IoPersonOutline size="20px" />
          </Link>
          <Link className="cartMenu">
            <FiHeart size="20px" />
          </Link>
          <Link to="/checkout" className="cart_button">
            <AiOutlineShopping size="20px" />
            <div className="mycart">MY CART({cart.length})</div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

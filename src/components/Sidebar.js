import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import Rating from "./Rating";
import "./style.css";

function Sidebar({ handleClearAll }) {
  const {
    allProducts: { cart },
    filter,
    setFilter,
  } = useGlobalContext();

  const { sorting, bystock, byRating, byDelivery, bySearch, byCategory } =
    filter;

  const handleSorting = (name, value) => {
    setFilter({ ...filter, sorting: value });
  };
  const handleOutOfStock = () => {
    setFilter({ ...filter, bystock: !bystock });
  };
  const handlefastDilevery = () => {
    setFilter({ ...filter, byDelivery: !byDelivery });
  };

  // const handleClearAll = () => {
  //   setFilter({
  //     ...filter,
  //     sorting: "",
  //     bystock: false,
  //     byRating: 0,
  //     byDelivery: false,
  //     bySearch: "",
  //     byCategory: "all",
  //   });
  // };

  const handleCategory = (category) => {
    // console.log(category);
    setFilter({ ...filter, byCategory: category });
    // console.log(filter);
  };
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   setFilter({ ...filter, bySearch: e.target.value });
  // };
  // console.log(sorting, bystock, byRating, byDelivery, bySearch);
  return (
    <>
      <div className="sidebar">
        <div className="sidebarTitle">Filter By</div>
        {/* <input
          className="sidebar__searchbar"
          type="text"
          placeholder="SEARCH..."
          onChange={(e) => {
            handleSearch(e);
          }}
        /> */}
        <div className="sidebar_title">Category</div>
        <div className="category_content">
          <div
            className="sidebar__category"
            onClick={() => handleCategory("all")}
          >
            All
          </div>
          <div
            className="sidebar__category"
            onClick={() => handleCategory("mobile")}
          >
            Mobile
          </div>
          <div
            className="sidebar__category"
            onClick={() => handleCategory("laptop")}
          >
            Laptop
          </div>
          <div
            className="sidebar__category"
            onClick={() => handleCategory("computer")}
          >
            Computer
          </div>
          <div
            className="sidebar__category"
            onClick={() => handleCategory("accessories")}
          >
            Accessories
          </div>
          <div
            className="sidebar__category"
            onClick={() => handleCategory("watch")}
          >
            Watch
          </div>
        </div>
        <br />
        <div className="sidebar_title">Availability</div>
        <div className="category_content">
          {" "}
          <input
            type="checkbox"
            id="includeOutOfStock"
            onClick={handleOutOfStock}
          />
          <label className="sidebar__category" id="includeOutOfStock">
            Include Out Of Stock
          </label>
        </div>
        <div className="category_content">
          <input
            type="checkbox"
            id="fastDilevery"
            onClick={handlefastDilevery}
          />
          <label className="sidebar__category" id="fastDilevery">
            Fast Delivery Only
          </label>
        </div>
        {/* <div className="sidebar__price"> */}
        <div className="rating">
          <div className="sidebar_title">Price : </div>
          <select
            className="lh"
            name="sorting"
            onChange={(e) => handleSorting(e.target.name, e.target.value)}
          >
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        {/* </div> */}
        <div className="rating">
          <span className="sidebar_title">Rating : </span>
          <Rating />
        </div>

        <div className="cart_button" onClick={handleClearAll}>
          Clear Filter
        </div>
        {/* <div className="checking">
        <div className="sidebar-subtitle">Sort By</div>
        <p className="sidebar_title">Filter Products</p>
        <form>
          <input
            type="radio"
            id="ascending"
            name="sorting"
            onClick={handleAscending}
          />
          <label htmlFor="ascending">Price:Low to High</label>
          <br />
          <input
            type="radio"
            id="descending"
            name="sorting"
            onClick={handleDescending}
          />

          <label htmlFor="descending">Price:High to Low</label>
        </form>
        <br></br>
        <div className="sidebar-subtitle">Filter By</div>
        <input
          type="checkbox"
          id="includeOutOfStock"
          onClick={handleOutOfStock}
        />
        <label id="includeOutOfStock">Include Out Of Stock</label>
        <br />
        <input type="checkbox" id="fastDilevery" onClick={handlefastDilevery} />
        <label id="fastDilevery">Fast Delivery Only</label>
        <br />
        <br></br>
        <span className="rate">Rating: </span>
        <Rating />

        <button onClick={handleClearAll}>Clear Filter</button>
      </div> */}
      </div>
    </>
  );
}

export default Sidebar;

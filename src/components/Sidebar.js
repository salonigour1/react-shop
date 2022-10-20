import React from "react";
import { useGlobalContext } from "../context/context";
import Rating from "./Rating";
import "./style.css";

function Sidebar() {
  const { filter, setFilter } = useGlobalContext();

  const { sorting, bystock, byRating, byDelivery, bySearch } = filter;

  const handleAscending = () => {
    setFilter({ ...filter, sorting: "lowToHigh" });
  };
  const handleDescending = () => {
    setFilter({ ...filter, sorting: "highToLow" });
  };
  const handleOutOfStock = () => {
    // console.log("here");
    setFilter({ ...filter, bystock: !bystock });
  };
  const handlefastDilevery = () => {
    setFilter({ ...filter, byDelivery: !byDelivery });
  };

  const handleClearAll = () => {
    setFilter({
      ...filter,
      sorting: "",
      bystock: false,
      byRating: 0,
      byDelivery: false,
      bySearch: "",
    });
  };

  console.log(sorting, bystock, byRating, byDelivery, bySearch);
  return (
    <div className="sidebar">
      <div className="checking">
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
      </div>
    </div>
  );
}

export default Sidebar;

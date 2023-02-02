import React from "react";

import { useGlobalContext } from "../context/context";
import Sidebar from "./Sidebar";
import SingleProduct from "./SingleProduct";
import { BsSearch } from "react-icons/bs";
import "./styles.css";
import ProductsList from "./ProductsList";
function ShopPage() {
  const {
    allProducts: { product },
    setAllProducts,
    filter,
    setFilter,
  } = useGlobalContext();
  const { sorting, bystock, byRating, byDelivery, bySearch, byCategory } =
    filter;
  const transfromProduct = () => {
    let newData = product;

    if (sorting === "lowToHigh") {
      newData = newData.sort((a, b) =>
        Number(a.price) > Number(b.price) ? 1 : -1
      );
    }
    if (sorting === "highToLow") {
      newData = newData.sort((a, b) =>
        Number(a.price) > Number(b.price) ? -1 : 1
      );
    }
    if (bystock) {
      newData = newData.filter((curr) => curr.inStock > 0);
    }
    if (byDelivery) {
      newData = newData.filter((curr) => curr.fastDelivery);
    }
    if (byRating) {
      newData = newData.filter((curr) => curr.rating > byRating);
    }
    if (bySearch) {
      newData = newData.filter((curr) =>
        curr.name.toLowerCase().includes(bySearch)
      );
    }
    if (byCategory === "mobile") {
      newData = newData.filter((curr) => curr.category === "mobile");
    }
    if (byCategory === "laptop") {
      newData = newData.filter((curr) => curr.category === "laptop");
    }
    if (byCategory === "computer") {
      newData = newData.filter((curr) => curr.category === "computer");
    }
    if (byCategory === "watch") {
      newData = newData.filter((curr) => curr.category === "watch");
    }
    if (byCategory === "accessories") {
      newData = newData.filter((curr) => curr.category === "accessories");
    }
    return newData;
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setFilter({ ...filter, bySearch: e.target.value });
  };

  const handleClearAll = () => {
    setFilter({
      ...filter,
      sorting: "",
      bystock: false,
      byRating: 0,
      byDelivery: false,
      bySearch: "",
      byCategory: "all",
    });
  };
  return (
    <div className="products">
      <Sidebar handleClearAll={handleClearAll} />
      <div className="Right">
        <div className="topbar">
          <input
            className="sidebar__searchbar"
            type="text"
            placeholder="SEARCH..."
            onChange={(e) => {
              handleSearch(e);
            }}
          />
          <div className="searchIcon">
            <BsSearch size="16px" />
          </div>
        </div>
        {/* <div className="sidebar__price">
            <label className="sidebar_title">Price</label>
            <br />
            <select
              className="lh"
              name="sorting"
              onChange={(e) => handleSorting(e.target.name, e.target.value)}
            >
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div> */}

        {/* <div className="allProducts">
          {transfromProduct().map((curr) => {
            return <SingleProduct key={curr.id} {...curr} />;
          })}
        </div> */}
        <ProductsList transfromProduct={transfromProduct} />
      </div>
    </div>
  );
}

export default ShopPage;

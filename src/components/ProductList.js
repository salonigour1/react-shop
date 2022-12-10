import React from "react";

import { useGlobalContext } from "../context/context";
import Sidebar from "./Sidebar";
import SingleProduct from "./SingleProduct";
import "./style.css";
function ProductList() {
  const {
    allProducts: { product },
    setAllProducts,
    filter: { sorting, bystock, byRating, byDelivery, bySearch, byCategory },
  } = useGlobalContext();

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

  return (
    <div className="content">
      <Sidebar />
      <div className="productContainer">
        {transfromProduct().map((curr) => {
          return <SingleProduct key={curr.id} {...curr} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;

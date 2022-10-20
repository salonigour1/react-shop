import React from "react";

import { useGlobalContext } from "../context/context";
import Sidebar from "./Sidebar";
import SingleProduct from "./SingleProduct";
import "./style.css";
function ProductList() {
  const {
    allProducts: { product },
    setAllProducts,
    filter: { sorting, bystock, byRating, byDelivery, bySearch },
  } = useGlobalContext();

  console.log(product);
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
    return newData;
  };

  return (
    <div className="content">
      <Sidebar />
      <div className="productContainer">
        {transfromProduct().map((curr, index) => {
          return <SingleProduct key={curr.id} {...curr} />;
        })}
      </div>
    </div>
  );
}

export default ProductList;

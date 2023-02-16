import React from "react";
import Navbar from "../components/Navbar";
import ShopPage from "../components/ShopPage";
import Spinner from "../components/Spinner";
import { useGlobalContext } from "../context/context";

function Product() {
  const { loading } = useGlobalContext();
  return (
    <>
      <Navbar />
      {loading ? <Spinner /> : <ShopPage />}
    </>
  );
}

export default Product;

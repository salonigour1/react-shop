import React from "react";
import SingleProduct from "./SingleProduct";

function ProductsList({ transfromProduct }) {
  return (
    <div className="allProducts">
      {transfromProduct().length === 0 ? (
        <div className="test">Not found</div>
      ) : (
        transfromProduct().map((curr) => {
          return <SingleProduct key={curr.id} {...curr} />;
        })
      )}
    </div>
  );
}

export default ProductsList;

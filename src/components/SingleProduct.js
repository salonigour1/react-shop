import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { useGlobalContext } from "../context/context";

function SingleProduct({
  id,
  name,
  price,
  image,
  inStock,
  rating,
  fastDelivery,
}) {
  //   console.log(name, price, image, inStock, rating, fastDelivery);
  const {
    allProducts: { product, cart },
    setAllProducts,
  } = useGlobalContext();
  // console.log(cart);

  const handleAddBtn = () => {
    console.log("ok");
    setAllProducts({
      product: [...product],
      cart: [
        ...cart,
        { id, name, price, image, inStock, rating, fastDelivery, qty: 1 },
      ],
    });
  };
  const handleRemoveBtn = () => {
    const newCart = cart.filter((curr) => curr.id !== id);
    console.log(newCart);
    setAllProducts({ product: [...product], cart: newCart });
  };

  return (
    <div className="singleProduct">
      <img src={image} alt={name}></img>
      <div className="detail">
        <h3 className="productName">{name}</h3>
        <p className="productPrice">Rs {price}</p>
        <p className="productDelivery">
          {fastDelivery ? "Fast Delivery" : "4 days delivery"}
        </p>
        <p>
          {[...Array(5)].map((_, index) => {
            return index >= rating ? (
              <FaRegStar color="orange" fontSize="20px" key={index} />
            ) : (
              <FaStar color="orange" fontSize="20px" key={index} />
            );
          })}
        </p>
        <p>
          {!cart.some((curr) => curr.id === id) ? (
            <button
              disabled={!inStock}
              className="addCart"
              onClick={handleAddBtn}
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          ) : (
            <button className="removeCart" onClick={handleRemoveBtn}>
              Remove from Cart
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

export default SingleProduct;

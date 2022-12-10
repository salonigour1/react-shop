import React from "react";
import { Link, useNavigate } from "react-router-dom";
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
  console.log(id);
  const {
    allProducts: { product, cart },
    setAllProducts,
  } = useGlobalContext();
  // console.log(cart);
  // const handleProductDetail = () => {
  //   const navigate = useNavigate();
  //   navigate("/details/:name");
  // };
  const handleAddBtn = () => {
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

  console.log(id);
  return (
    <Link to={`/details/${id}`} className="singleProduct">
      <img className="singleProduct__image" src={image} alt={name} />
      <div className="singleProduct__detail">
        <div>{name}</div>
        <div>Rs {price}</div>
      </div>
    </Link>
    // <img className="singleProduct__image" src={image} alt={name} />
    /* <img src={image} alt={name}></img>
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
      </div> */
  );
}

export default SingleProduct;

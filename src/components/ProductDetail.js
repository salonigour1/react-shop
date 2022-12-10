import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Navbar from "./Navbar";
function ProductDetail() {
  const {
    allProducts: { product, cart },
    setAllProducts,
  } = useGlobalContext();
  const [productDetail, setProductDetail] = useState({});

  const params = useParams();
  const productId = params.id;
  console.log(product);
  useEffect(() => {
    product.filter((curr) => {
      if ((curr.id = productId)) {
        setProductDetail({ ...curr });
      }
      return true;
    });
    console.log(productDetail);
  }, []);
  const {
    id,
    image,
    inStock,
    rating,
    name,
    category,
    colors,
    company,
    description,
    fastDelivery,
    price,
  } = productDetail;
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

  console.log(image, name);
  return (
    <>
      <Navbar />
      <div className="productDetail">
        <div className="productDetail__Image">
          <img src={image} alt={name} />
        </div>
        <div className="productDetail__Details">
          <div className="productDetail__Details--name">{name}</div>
          <div className="productDetail__Details--rating">
            {[...Array(5)].map((_, index) => {
              return index >= rating ? (
                <FaRegStar color="orange" fontSize="15px" key={index} />
              ) : (
                <FaStar color="orange" fontSize="15px" key={index} />
              );
            })}
            <span className="rating_text">(28 customer review)</span>
          </div>
          <div className="productDetail__Details--price">MRP: {price} Rs</div>
          <div className="productDetail__Details--description">
            {description}
          </div>
          <br />
          <hr />
          <div className="productDetail__Details--available">
            <span className="grey">Available:</span>
            {inStock > 0 ? "In Stock" : "Out of Stock"}
          </div>
          <div className="productDetail__Details--brand">
            <span className="grey">Brand:</span> {company}
          </div>
          {!cart.some((curr) => curr.id === id) ? (
            <button
              disabled={!inStock}
              className="productDetail__Details--add"
              onClick={handleAddBtn}
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          ) : (
            <button
              className="productDetail__Details--remove"
              onClick={handleRemoveBtn}
            >
              Remove from Cart
            </button>
          )}
          <Link to="/checkout" className="productDetail__Details--btn">
            Go to Bag
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

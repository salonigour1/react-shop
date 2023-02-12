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
      if (curr.id === productId) {
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
        {
          id,
          name,
          price,
          company,
          image,
          inStock,
          rating,
          fastDelivery,
          qty: 1,
        },
      ],
    });
  };
  const numberWithCommas = (num) => {
    let price = Number(num);
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
      <div className="Product_detailsPage">
        <div className="all_title">Product Details Page</div>
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
            <div className="productDetail__Details--price">
              {numberWithCommas(price)} Rs
            </div>
            <div className="productDetail__Details--brand">{company}</div>
            <div className="productDescription">Product Description</div>
            <div className="productDetail__Details--description">
              {description}
            </div>

            <hr />
            <div className="productDetail__Details--available">
              <span className="grey">Availability </span>
              {inStock > 0 ? "In Stock" : "Out of Stock"}
            </div>
            <div className="details_button">
              {!cart.some((curr) => curr.id === id) ? (
                <div
                  disabled={!inStock}
                  className="cart_button"
                  onClick={handleAddBtn}
                >
                  {inStock ? "Add to Cart" : "Out of Stock"}
                </div>
              ) : (
                <div className="cart_button" onClick={handleRemoveBtn}>
                  Remove from Cart
                </div>
              )}
              <Link to="/checkout" className="cart_button">
                Go to Bag
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

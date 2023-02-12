import React from "react";
import hero from "../hero.jpeg";
import { Link } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import { AiOutlineShopping } from "react-icons/ai";
import { useGlobalContext } from "../context/context";
import ProductsList from "./ProductsList";
import { FaTruckMoving } from "react-icons/fa";
function HomeContent() {
  const {
    allProducts: { product },
  } = useGlobalContext();
  const trending = [...product];
  console.log(trending.splice(8), product);
  return (
    <div>
      <div className="hero_section">
        <div className="hero_heading">
          Over <span className="color">1000</span> products
          <br />
          Smart <span className="color">gadgets</span> for your comfort&nbsp;
          <span className="color">&</span>&nbsp;convenience
        </div>
        <div className="hero_subheading">
          The one-stop destination for all your shopping needs
        </div>
        <div>
          <Link to="/product" className="cart_button">
            <FiShoppingCart size="20px" /> <span>&nbsp;SHOP NOW</span>
          </Link>
        </div>
      </div>
      <div className="categories">
        <div>
          <img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202205/26/siwzk8lPjtX8oR4P.png" />
          Mobile
        </div>
        <div>
          <img src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          Computer
        </div>
        <div>
          <img src="https://images.prismic.io/frameworkmarketplace/46cbf974-cdff-4cd8-b761-8b4a3343f6c4_FW-chromebook-homepage-carousel.png?auto=compress,format" />{" "}
          Laptop
        </div>
        <div>
          <img src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          Watches
        </div>

        <div>
          <img src="https://m.media-amazon.com/images/I/51oZ4ZKdzTL._SY606_.jpg" />
          Accessories
        </div>
      </div>
      <div className="trending">Trending Products</div>
      <div className="subtitle_trending">
        Check out our trending products. These products are worth your
        attention.
      </div>
      <ProductsList transfromProduct={() => trending} />
      {/* ------------------------------------------------ */}
      <br />

      <div className="policy">
        <div>
          <FaTruckMoving className="orange" color="black" size="32px" />{" "}
          &nbsp;Fast and free delivery
        </div>
        <div>
          <MdOutlineSecurity color="black" size="32px" /> &nbsp; Non-contact
          shipping
        </div>
        <div>
          <GiTakeMyMoney color="black" size="32px" /> &nbsp; Money-back
          Guaranteed
        </div>
        <div>
          <RiSecurePaymentFill color="black" size="32px" /> &nbsp; Super-Secure
          payment system
        </div>
      </div>
      {/* <div className="policy">
        <div className="policy__first">
          <FaTruckMoving color="black" size="32px" /> &nbsp;Fast and free
          delivery
        </div>
        <div className="middle">
          <div>
            <MdOutlineSecurity color="black" size="32px" /> &nbsp; Non-contact
            shipping
          </div>
          <div>
            <GiTakeMyMoney color="black" size="32px" /> &nbsp; Money-back
            Guaranteed
          </div>
        </div>
        <div className="policy__first">
          <RiSecurePaymentFill color="black" size="32px" /> &nbsp; Super-Secure
          payment system
        </div>
      </div> */}
      {/* <div className="services">
        <div className="serviceheading">
          <div>Check Now !</div>
          <div>Our Feature Service</div>
        </div>
        <div>
          <Link to="/products" className="home_product">
            <div className="home__product_content">
              <img
                className="singleProduct__image"
                src="https://images.pexels.com/photos/1275229/pexels-photo-1275229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="tag">Mobile</div>
              <div className="singleProduct__detail">
                <div>Iphone x2</div>
                <div>Rs 192939</div>
              </div>
            </div>
          </Link>
          <Link to="/products" className="home_product">
            <div className="home__product_content">
              <img
                className="singleProduct__image"
                src="https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="tag">Accessories</div>
              <div className="singleProduct__detail">
                <div>Iphone x2</div>
                <div>Rs 192939</div>
              </div>
            </div>
          </Link>
          <Link to="/product" className="home_product">
            <div className="home__product_content">
              <img
                className="singleProduct__image"
                src="https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <div className="tag">Watch</div>
              <div className="singleProduct__detail">
                <div>Iphone x2</div>
                <div>Rs 192939</div>
              </div>
            </div>
          </Link>
        </div>
      </div> */}
      {/* <div className="policy">
        <div className="policy__first">
          <FaTruckMoving color="black" size="32px" /> &nbsp;Fast and free
          delivery
        </div>
        <div className="middle">
          <div>
            <MdOutlineSecurity color="black" size="32px" /> &nbsp; Non-contact
            shipping
          </div>
          <div>
            <GiTakeMyMoney color="black" size="32px" /> &nbsp; Money-back
            Guaranteed
          </div>
        </div>
        <div className="policy__first">
          <RiSecurePaymentFill color="black" size="32px" /> &nbsp; Super-Secure
          payment system
        </div>
      </div> */}
    </div>
  );
}

export default HomeContent;

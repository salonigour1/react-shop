import React from "react";
import hero from "../hero.jpeg";
import { Link } from "react-router-dom";
import { MdOutlineSecurity } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiSecurePaymentFill } from "react-icons/ri";

import { FaTruckMoving } from "react-icons/fa";
function HomeContent() {
  return (
    <div>
      <div className="heroSection">
        <div className="heroSection__content--heading">
          <span>Welcom to</span>
          <br />
          <span>WebShop</span>
          <div className="heroSection__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, aspernatur eius ipsam, omnis delectus dolorum modi
            iure fugiat eos officia impedit soluta voluptate.
          </div>
          <Link to="/product" className="heroSection__button">
            SHOP
          </Link>
        </div>
        <div className="heroSection__content--image">
          <img src={hero} className="heroSection__image" />
          <div className="heroSection__background"></div>
        </div>
      </div>
      <div className="services">
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
      </div>
      <div className="policy">
        <div className="policy__first">
          <FaTruckMoving color="purple" size="32px" /> &nbsp;Fast and free
          delivery
        </div>
        <div className="middle">
          <div>
            <MdOutlineSecurity color="purple" size="32px" /> &nbsp; Non-contact
            shipping
          </div>
          <div>
            <GiTakeMyMoney color="purple" size="32px" /> &nbsp; Money-back
            Guaranteed
          </div>
        </div>
        <div className="policy__first">
          <RiSecurePaymentFill color="purple" size="32px" /> &nbsp; Super-Secure
          payment system
        </div>
      </div>
    </div>
  );
}

export default HomeContent;

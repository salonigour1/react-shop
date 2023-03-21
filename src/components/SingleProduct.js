import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FiShoppingCart, FiHeart, FiSearch } from 'react-icons/fi';
import { useGlobalContext } from '../context/context';
import { AiOutlineShopping } from 'react-icons/ai';
function SingleProduct({
  id,
  name,
  price,
  image,
  inStock,
  company,
  rating,
  fastDelivery,
}) {
  //   console.log(name, price, image, inStock, rating, fastDelivery);

  const {
    allProducts: { product, cart },
    setAllProducts,
  } = useGlobalContext();
  const [icons, setIcons] = useState(false);
  // console.log(cart);
  // const handleProductDetail = () => {
  //   const navigate = useNavigate();
  //   navigate("/details/:name");
  // };
  const handleAddBtn = (id) => {
    if (cart.filter((curr) => (curr.id === id ? true : false)).length !== 0) {
      return;
    }

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
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  useEffect(() => {
    console.log('heree');
    const handleIcons = (e) => {
      console.log(e);
      setIcons(false);
    };
    document.body.addEventListener('onmouseover', handleIcons);
    return () => document.body.removeEventListener('onmouseover', handleIcons);
  }, []);

  return (
    <div className='Product_cart'>
      <Link to={`/details/${id}`}>
        <div className='singleProduct'>
          <img className='singleProduct_image' src={image} alt={name} />
          <div className='overlay'></div>
          <div className='shop_icons'>
            <div onClick={() => handleAddBtn(id)}>
              <AiOutlineShopping size='20px' color='black' />
            </div>
            <div>
              <FiHeart size='20px' color='black' />
            </div>
            <div>
              <Link to={`/details/${id}`}>
                <FiSearch size='20px' color='black' />
              </Link>
            </div>
          </div>
        </div>
      </Link>
      <div className='singleProduct_detail'>
        <div className='name'>{name}</div>
        <div className='company'>{company}</div>
        <div className='price'>Rs&nbsp;{numberWithCommas(Number(price))}</div>
      </div>
    </div>
  );
}

export default SingleProduct;

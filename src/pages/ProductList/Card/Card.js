import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ product }) {
  const [isHover, setIsHover] = useState(false);
  const changeImg = e => {
    setIsHover(true);
  };

  console.log(isHover);
  const imgUrl = isHover ? product.thumbnail_url[0] : product.thumbnail_url[1];

  return (
    <li className="card">
      <Link to="/product">
        <figure
          onMouseOver={changeImg}
          className="img"
          style={
            product && {
              background: `url(${imgUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          }
          alt="제품이미지"
        />
      </Link>
      <div className="desc">
        <p className="name">{product.name}</p>
        <p className="price">{product.price}</p>
      </div>
    </li>
  );
}

export default Card;

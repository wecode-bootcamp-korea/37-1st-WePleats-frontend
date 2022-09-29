import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ product }) {
  const [isHover, setIsHover] = useState(false);

  const imgUrl = !isHover ? product.thumbnail_url[0] : product.thumbnail_url[1];

  return (
    <li className="card">
      <Link to={`/product/${product.id}`}>
        <div className="imgBoxWrap">
          <div className="imgBox">
            <img
              onMouseOver={e => {
                setIsHover(true);
              }}
              onMouseLeave={() => setIsHover(false)}
              className="img"
              src={imgUrl}
              alt="제품이미지"
            />
          </div>
        </div>
      </Link>
      <div className="desc">
        <p className="name">{product.name}</p>
        <p className="price">{product.price}</p>
      </div>
    </li>
  );
}

export default Card;

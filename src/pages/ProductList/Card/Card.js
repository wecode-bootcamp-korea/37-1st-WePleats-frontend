import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ product }) {
  return (
    <li className="card">
      <Link to="/product">
        <figure
          className="img"
          style={{
            background: `url(${product.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
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

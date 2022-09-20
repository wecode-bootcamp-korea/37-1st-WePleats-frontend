import React from 'react';
import './Card.scss';

function Card({ product }) {
  return (
    <li className="card">
      <figure
        className="img"
        style={{
          background: `url(${product.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="desc">
        <p className="name">{product.name}</p>
        <p className="price">{product.price}</p>
      </div>
    </li>
  );
}

export default Card;

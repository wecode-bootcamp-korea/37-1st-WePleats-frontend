import React from 'react';
import './Product.scss';

function Product({ product }) {
  return (
    <li className="product">
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

export default Product;

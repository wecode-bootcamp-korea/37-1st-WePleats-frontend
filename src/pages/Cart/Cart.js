import React, { useEffect, useState } from 'react';
import CartFilled from './components/CartFilled';
import CartEmpty from './components/CartEmpty';
import './Cart.scss';

function Cart() {
  const [cartProducts, setCartProducts] = useState({});

  useEffect(() => {
    fetch('./data/Cart.json', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjM4NDU3ODF9.2aFMvfGNMWWlBhf0MNQhiUCN5cHp3OceDIvZqf2JylA',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => setCartProducts(json.cart));
  }, []);

  return (
    <div className="backgroundBox">
      <div className="innerBox">
        <div className="paddingBox1" />
        {cartProducts.length ? (
          <CartFilled products={cartProducts} setProducts={setCartProducts} />
        ) : (
          <CartEmpty />
        )}
        <div className="paddingBox2" />
      </div>
      <div className="bottomPaddingBox" />
    </div>
  );
}

export default Cart;

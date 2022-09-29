import React, { useEffect, useState } from 'react';
import CartFilled from './components/CartFilled';
import CartEmpty from './components/CartEmpty';
import './Cart.scss';

function Cart() {
  const [cartProducts, setCartProducts] = useState({});

  useEffect(() => {
    fetch('http://172.20.10.10:3000/cart', {
      headers: {
        authorization: localStorage.getItem('TOKEN'),
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

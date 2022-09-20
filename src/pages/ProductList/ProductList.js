import React, { useState, useEffect } from 'react';
import { COLOR_CATE } from './COLOR_CATE';
import './ProductList.scss';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/productInfo.json')
      .then(res => res.json())
      .then(res => setProducts(res));
  }, []);

  return (
    <div className="productlist">
      <div className="outerBox">
        <div className="filterBox">
          <ul className="colorBox">
            {COLOR_CATE.map(info => {
              return (
                <li className="colorItem" id={info.id} key={info.id}>
                  <div
                    className="color"
                    style={{ background: `${info.color}` }}
                  />
                  <p className="name">{info.name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="colorBar" />

      <div className="outerBox">
        <ul className="listBox">
          {products.map(product => {
            return (
              <li className="cardBox" key={product.id}>
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
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;

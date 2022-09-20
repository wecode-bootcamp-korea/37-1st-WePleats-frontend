import React, { useState, useEffect } from 'react';
import Product from './Product/Product';
import Filter from './Filter/Filter';
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
        <ul className="colorBox">
          {COLOR_CATE.map(info => {
            return <Filter info={info} key={info.id} />;
          })}
        </ul>
      </div>

      <div className="colorBar" />

      <div className="outerBox">
        <ul className="listBox">
          {products.map(product => {
            return <Product product={product} key={product.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;

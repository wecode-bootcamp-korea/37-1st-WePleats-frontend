import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Card from './Card/Card';
import Filter from './Filter/Filter';
import { COLOR_CATE } from './COLOR_CATE';
import './ProductList.scss';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const id = searchParams.get('id');

  useEffect(() => {
    fetch(`http://3.35.54.156:3000/category?category=${category}&id=${id}`)
      .then(res => res.json())
      .then(res => setProducts(res.getProducts));
  }, [category, id]);

  const sortColor = colorNum => {
    searchParams.set('color', colorNum);
    setSearchParams(searchParams);
    const color = searchParams.get('color');
    fetch(
      `http://3.35.54.156:3000/category?category=${category}&id=${id}&color=${color}`
    )
      .then(res => res.json())
      .then(res => setProducts(res.getProducts));
  };

  return (
    <div className="productlist">
      <div className="outerBox">
        <ul className="colorBox">
          {COLOR_CATE.map(info => {
            return <Filter info={info} key={info.id} sortColor={sortColor} />;
          })}
        </ul>
      </div>

      <div className="colorBar" />

      <div className="outerBox">
        <ul className="listBox">
          {products.map(product => {
            return <Card product={product} key={product.id} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProductList;

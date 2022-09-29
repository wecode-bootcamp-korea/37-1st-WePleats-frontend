import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../ProductList/Card/Card';
import './BestNew.scss';

function BestNew() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const menuName = params.id;

  useEffect(() => {
    fetch(`http://192.168.47.96:3000/category/${menuName}`)
      .then(res => res.json())
      .then(res => setProducts(res.getProducts));
  }, [menuName]);

  return (
    <div className="bestnew">
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

export default BestNew;

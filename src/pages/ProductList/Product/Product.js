import React, { useState, useEffect } from 'react';
import './Product.scss';

function Product() {
  const [product, setProduct] = useState({});
  const [currentUrl, setCurrentUrl] = useState('');

  const getUrl = e => {
    setCurrentUrl(e.target.src);
  };

  useEffect(() => {
    fetch('data/product.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);

  return (
    <>
      <nav className="nav">
        <ul className="subMenu">
          <li className="li home">Home</li>
          <li className="li">
            <i className="fa-thin fa-greater-than" />
          </li>
          <li className="li productLists">숄더&토트백</li>
          <li className="li">
            <i className="fa-thin fa-greater-than" />
          </li>
          <li className="li product">토트백</li>
        </ul>
      </nav>
      <main className="product">
        <section className="img">
          <div className="main">
            <img className="img" src={currentUrl} alt="메인 이미지" />
          </div>
          <div className="sub" onMouseOver={getUrl}>
            <ul className="subImgs">
              {product.img &&
                product.img.map(item => {
                  return (
                    <li key={item.id} className="subImg">
                      <img
                        className="img"
                        src={item.imageUrl}
                        alt="서브 이미지"
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;

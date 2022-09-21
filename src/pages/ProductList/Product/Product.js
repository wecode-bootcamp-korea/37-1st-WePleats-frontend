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
      .then(data => {
        setProduct(data);
        setCurrentUrl(data.img[0].imageUrl);
      });
  }, []);

  return (
    <div className="productBox">
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
          <div className="sub">
            <ul className="subImgs">
              {product.img &&
                product.img.map(item => {
                  return (
                    <li onMouseOver={getUrl} key={item.id} className="subImg">
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
        <section className="form">
          <div className="header">
            <div className="title">
              <h1 className="name">item.name</h1>
              <h1 className="price">item.price</h1>
            </div>
            <div className="share">
              <i className="fa-solid fa-share-nodes" />
            </div>
          </div>
          <div className="colors" />
          <ul className="options">
            <li className="option">
              <strong>배송방법</strong>택배
            </li>
            <li className="option">
              <strong>배송비</strong>무료
              {/* {item.price >= 50000
                ? '무료 (50,000원 이상 무료배송) |도서산간 배송비 추가'
                : ' 3,000원 (50,000원 이상 무료배송) |도서산간 배송비 추가'} */}
            </li>
          </ul>
          <div className="quantity">
            <h1>수량</h1>
            <div className="border" />
          </div>
          <div className="total" />
          <div className="buttons" />
        </section>
      </main>
    </div>
  );
}

export default Product;

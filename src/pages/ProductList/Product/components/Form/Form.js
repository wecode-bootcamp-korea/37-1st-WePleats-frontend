import React, { useState } from 'react';
import './Form.scss';

function Form({ product }) {
  const [total, setTotal] = useState(1);
  const [isHeart, setIsHeart] = useState(false);

  const getTotal = e => {
    const inputValue = Number(e.target.value);
    setTotal(inputValue);
  };

  const totalDown = () => {
    if (total <= 1) return;
    setTotal(current => current - 1);
  };

  const totalUp = () => {
    setTotal(current => current + 1);
  };

  const changeHeart = () => {
    setIsHeart(current => !current);
  };

  return (
    <section className="form">
      <div className="header">
        <div className="title">
          <h1 className="name">{product.name}</h1>
          <h1 className="price">
            {product.price && product.price.toLocaleString()}원
          </h1>
        </div>
        <div className="share">
          <i className="fa-regular fa-share-from-square" />
        </div>
      </div>
      <div className="border" />
      <div className="colors">
        <div className="color red" />
        <div className="color orange" />
        <div className="color yellow" />
        <div className="color green" />
        <div className="color blue" />
        <div className="color navy" />
        <div className="color purple" />
      </div>
      <ul className="options">
        <li className="option">
          <strong className="name">배송방법</strong>택배
        </li>
        <li className="option">
          <strong className="name">배송비</strong>
          {product.price >= 50000 ? '무료  ' : '3,000원  '}( 50,000원 이상
          무료배송 | 도서산간 배송비 추가 )
        </li>
      </ul>
      <div className="quantity">
        <h1 className="title">수량</h1>
        <div className="border" />
        <div className="btnWrap">
          <div className="count">
            <button className="countBtn" onClick={totalDown}>
              <i className="fa-solid fa-minus" />
            </button>
            <input
              className="countInput"
              type="number"
              value={total}
              onChange={getTotal}
            />
            <button className="countBtn" onClick={totalUp}>
              <i className="fa-solid fa-plus" />
            </button>
          </div>
          <div className="price">
            {product.price && (product.price * total).toLocaleString()}원
          </div>
        </div>
      </div>
      <div className="total">
        <div className="title">총 상품금액({total}개)</div>
        <div className="price">
          {product.price && (product.price * total).toLocaleString()}원
        </div>
      </div>
      <div className="buttons">
        <button className="button color">구매하기</button>
        <button className="button border cart">장바구니</button>
        <button className="button border" onClick={changeHeart}>
          <i
            className={isHeart ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}
          />
        </button>
      </div>
    </section>
  );
}

export default Form;

import React from 'react';
import './ProductList.scss';
import { COLOR_CATE } from './COLOR_CATE';

function ProductList() {
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
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
          <li className="cardBox">
            <figure
              className="img"
              style={{
                background:
                  'url(https://velog.velcdn.com/images/rayong/post/5516bca5-2764-4357-b710-544fc7b21cf7/image.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="desc">
              <p className="name">키보드</p>
              <p className="price">59,000원</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductList;

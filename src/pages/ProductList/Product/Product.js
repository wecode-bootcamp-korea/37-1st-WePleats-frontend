import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigate from './components/Navigate/Navigate';
import Form from './components/Form/Form';
import Accordions from './components/Accordions/Accordions';
import Review from './components/Review/Review';
import './Product.scss';

function Product() {
  const params = useParams();
  const id = params.id;
  const [product, setProduct] = useState({});
  const [currentUrl, setCurrentUrl] = useState('');

  const getUrl = e => {
    setCurrentUrl(e.target.src);
  };

  useEffect(() => {
    fetch(`http://3.35.54.156:3000/product/${id}`, {
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
        setCurrentUrl(data.product.image_url[0].image);
      });
  }, [id]);

  if (!product.id) return;

  return (
    <div className="productBox">
      <main className="product">
        <Navigate product={product} />
        <section className="img">
          <div className="main">
            <img className="mainImg" src={currentUrl} alt="productMainImg" />
          </div>
          <div className="sub">
            <ul className="subImgs">
              {product.image_url &&
                product.image_url.map((item, index) => {
                  return (
                    <li onMouseOver={getUrl} key={index} className="subImg">
                      <img
                        className="subImage"
                        src={item.image}
                        alt="productSubImg"
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
        <section className="content">
          <article className="details">
            <div className="brand">
              <img
                className="brandImg"
                src="images/brandImg.jpg"
                alt="brandImg"
              />
            </div>
            <div className="description">
              <h3 className="title">????????? ???????????? WePleats</h3>
              ??????, ????????? ?????????????????? ???????????? ????????? ????????? ?????? ??????!
              ??????????????? ????????? ???????????? ?????? ????????? ????????? ??????????????? ?????????
              ????????? ??? ??? ?????? ???????????? ??????????????? ??????????????????.
            </div>
            <div className="detail">
              <h1 className="title">{product.name}</h1>
              <h6 className="text">{product.description}</h6>
              <h6 className="color">color : {product.color}</h6>
              <ul className="detailImgs">
                {product.image_url &&
                  product.image_url.map((item, index) => {
                    return (
                      <li onMouseOver={getUrl} key={index} className="subImg">
                        <img
                          className="img"
                          src={item.image}
                          alt="?????? ?????????"
                        />
                      </li>
                    );
                  })}
              </ul>
              <span className="caution">
                ???????????? ?????? ????????? ??????????????? ????????? ??? ????????????.
              </span>
            </div>
          </article>
          <Accordions product={product} />
        </section>
        <Review product={product} />
      </main>
      <Form product={product} />
    </div>
  );
}

export default Product;

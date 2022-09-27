import React, { useState, useEffect } from 'react';
import Navigate from './components/Navigate/Navigate';
import Form from './components/Form/Form';
import Accordion from './components/Accordion/Accordion';
import Review from './components/Review/Review';
import './Product.scss';

function Product() {
  const [product, setProduct] = useState({});
  const [currentUrl, setCurrentUrl] = useState('');

  const getUrl = e => {
    setCurrentUrl(e.target.src);
  };

  useEffect(() => {
    fetch('data/product.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
        setCurrentUrl(data.product.image_url[0].image);
      });
  }, []);

  // useEffect(() => {
  //   fetch('https://b003-211-106-114-186.jp.ngrok.io/product/1', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       ' Access-Control-Allow-Origin':
  //         'https://b003-211-106-114-186.jp.ngrok.io/product/1',
  //     },
  //   })
  //     .then(response => {
  //       if (response.ok === true) {
  //         return response.json();
  //       }
  //     })
  //     .then(data => {
  //       if (data.message === 'INVALID_PRODUCT') {
  //         alert('실패');
  //       } else {
  //         alert('성공');
  //       }
  //     });
  // }, []);

  return (
    <div className="productBox">
      <Navigate product={product} />
      <main className="product">
        <section className="img">
          <div className="main">
            <img className="mainImg" src={currentUrl} alt="메인 이미지" />
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
                        alt="서브 이미지"
                      />
                    </li>
                  );
                })}
            </ul>
          </div>
        </section>
        <Form product={product} />
      </main>
      <section className="content">
        <article className="details">
          <div className="brand">
            <img
              className="brandImg"
              src="images/brandImg.jpg"
              alt="브랜드 이미지"
            />
          </div>
          <div className="description">
            <h3 className="title">개성을 살려주는 WePleats</h3>
            블랙, 그레이 모노톤으로만 이루어진 칙칙한 책상은 이제 그만!
            위플리츠는 하루에 대부분을 책상 앞에서 일하는 개발자들의 개성을
            표현해 줄 수 있는 색깔있는 프로덕트를 추천해줍니다.
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
                      <img className="img" src={item.image} alt="상세 이미지" />
                    </li>
                  );
                })}
            </ul>
            <span className="caution">
              모니터에 따라 약간의 색상차이가 발생할 수 있습니다.
            </span>
          </div>
        </article>
        <div className="accordion">
          <ul className="lists">
            {ACCORDION_LIST.map(info => (
              <Accordion
                key={info.id}
                title={info.title}
                text={info.text}
                productSize={product.size}
              />
            ))}
          </ul>
        </div>
      </section>
      <Review productId={product.id} />
    </div>
  );
}

export default Product;

const ACCORDION_LIST = [
  {
    id: 1,
    title: '배송 안내',
    text: '주문 기준 3일내 출고를 원칙으로 합니다.(영업일 기준)출고 후 1~3일 이내 받아보실 수 있습니다. (택배 영업소 사정에 따라 다소 차이가 있을 수 있습니다.)운송장번호 조회를 통해 배송과정을 확인하실 수 있습니다.일시 품절 및 제품 공급이 불가능 할 경우 결제일로부터 4영업일 이내 고객님께 안내 후 환불해드립니다.',
  },
  {
    id: 2,
    title: '반품 및 교환',
    text: '원단, 봉제 불량 또는 제품 하자의 경우 구입일로 부터 2주 이내 무상 수선 또는 교환, 환불이 가능합니다. 출고 후 1~3일 이내 받아보실 수 있습니다.상품하자 이외 사이즈, 색상 교환 또는 단순 착오나 변심에 의한 교환/반품 시 택배비는 고객 부담입니다.(왕복택배비 6천원 본인부담)또한 사이즈, 색상 교환, 단순 착오나 변심에 의한 교환의 경우 제품 회수가 완료된 후 교환 요청한 제품이 배송되는 점 참고 바랍니다.',
  },
  {
    id: 3,
    title: '사이즈',
    text: null,
  },
];

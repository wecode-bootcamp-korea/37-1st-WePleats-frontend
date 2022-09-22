import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';
import './Product.scss';

function Product() {
  const [product, setProduct] = useState({});
  const [currentUrl, setCurrentUrl] = useState('');
  const [total, setTotal] = useState(1);
  const [isClicked, setIsClicked] = useState(false);
  const [reviews, setReviews] = useState([]);

  const getUrl = e => {
    setCurrentUrl(e.target.src);
  };

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
    setIsClicked(current => !current);
  };

  useEffect(() => {
    fetch('data/product.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
        setCurrentUrl(data.product.image[0].image);
        setReviews(data.review);
      });
  }, []);

  return (
    <>
      <div className="productBox">
        <nav className="nav">
          <ul className="subMenu">
            <li className="li home">Home</li>
            <li className="li">
              <i className="fa-thin fa-greater-than" />
            </li>
            <li className="li productLists">{product.main_category}</li>
            <li className="li">
              <i className="fa-thin fa-greater-than" />
            </li>
            <li className="li product">{product.sub_category}</li>
          </ul>
        </nav>
        <main className="product">
          <section className="img">
            <div className="main">
              <img className="img" src={currentUrl} alt="메인 이미지" />
            </div>
            <div className="sub">
              <ul className="subImgs">
                {product.image &&
                  product.image.map((item, index) => {
                    return (
                      <li onMouseOver={getUrl} key={index} className="subImg">
                        <img
                          className="img"
                          src={item.image}
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
                  className={
                    isClicked ? 'fa-solid fa-heart' : 'fa-regular fa-heart'
                  }
                />
              </button>
            </div>
          </section>
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
                {product.image &&
                  product.image.map((item, index) => {
                    return (
                      <li onMouseOver={getUrl} key={index} className="subImg">
                        <img
                          className="img"
                          src={item.image}
                          alt="상세 이미지"
                        />
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
              <li className="list">
                <div className="titleBox">
                  <h3 className="title">위플리츠만의 특별함</h3>
                  <i className="fa-solid fa-chevron-down" />
                </div>
                <div className="text">
                  필링 테스트 4~4.5로 우수한 마찰 견뢰도를 보이고 있습니다.
                  그러나 한 부분만 반복적으로 마찰에 노출되면 보풀이 발생할 수
                  있습니다. 이럴 경우 소비자 상담실로 A/S 요청하시면 깨끗하게
                  제거해 드립니다. * 마찰 견뢰도는 1~5등급으로 숫자가 클수록
                  보풀이 적게 발생한다는 의미입니다. 울이 섞인 일반적인 스웨터가
                  대략 3~3.5급 정도 받으면 합격 판정을받고 캐시미어나 앙고라
                  같이 헤어가 긴 섬유는 2~3급 정도시 별도의 취급주의 택을
                  부착하여 출시 합니다.
                </div>
              </li>
              <li className="list">
                <div className="titleBox">
                  <h3 className="title">배송 / 반품 / 교환</h3>
                  <i className="fa-solid fa-chevron-down" />
                </div>
                <div className="text">
                  <h3 className="subtitle">배송안내</h3>
                  <span className="subtext">
                    주문 기준 3일내 출고를 원칙으로 합니다.(영업일 기준)출고 후
                    1~3일 이내 받아보실 수 있습니다. (택배 영업소 사정에 따라
                    다소 차이가 있을 수 있습니다.)운송장번호 조회를 통해
                    배송과정을 확인하실 수 있습니다.일시 품절 및 제품 공급이
                    불가능 할 경우 결제일로부터 4영업일 이내 고객님께 안내 후
                    환불해드립니다.
                  </span>
                  <h3 className="subtitle">반품 / 교환 안내</h3>
                  원단, 봉제 불량 또는 제품 하자의 경우 구입일로 부터 2주 이내
                  무상 수선 또는 교환, 환불이 가능합니다. 출고 후 1~3일 이내
                  받아보실 수 있습니다.상품하자 이외 사이즈, 색상 교환 또는 단순
                  착오나 변심에 의한 교환/반품 시 택배비는 고객
                  부담입니다.(왕복택배비 6천원 본인부담)또한 사이즈, 색상 교환,
                  단순 착오나 변심에 의한 교환의 경우 제품 회수가 완료된 후 교환
                  요청한 제품이 배송되는 점 참고 바랍니다.
                </div>
              </li>
              <li className="list">
                <div className="titleBox">
                  <h3 className="title">사이즈</h3>
                  <i className="fa-solid fa-chevron-down" />
                </div>
                <div className="text">{product.size}</div>
              </li>
            </ul>
          </div>
        </section>
        <section className="review">
          <div className="header">
            <h1 className="title">구매평({reviews.length})</h1>
            <div className="text">
              상품을 구매하신 분들이 작성한 리뷰입니다.
            </div>
            <button className="button">구매평 작성</button>
            <div className="filter">
              <i className="fa-regular fa-image" />
              <div className="text">포토 구매평만 보기</div>
            </div>
          </div>
          <div className="border" />
          <ul className="lists">
            {reviews &&
              reviews.map(item => {
                return (
                  <li key={item.id} className="list">
                    <div className="content">
                      <h3 className="review">{item.comment}</h3>
                      <ul className="images">
                        {item.image_url !== 'null' ? (
                          <li className="image">
                            <img
                              className="img"
                              src={item.image_url}
                              alt="리뷰이미지"
                            />
                          </li>
                        ) : null}
                      </ul>
                    </div>
                    <div className="userInfo">
                      <p className="userId">{item.name}</p>
                      <p className="postTime">
                        {item.create_at.slice(0, 10)}{' '}
                        {item.create_at.slice(11, 16)}
                      </p>
                    </div>
                  </li>
                );
              })}
          </ul>
        </section>
      </div>
      <Modal />
    </>
  );
}

export default Product;

import React, { useState, useEffect } from 'react';
import './Product.scss';

function Product() {
  const [product, setProduct] = useState({});
  const [currentUrl, setCurrentUrl] = useState('');
  const [total, setTotal] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

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
            <img src="" alt="브랜드 이미지" />
          </div>
          <div className="image">
            <img src="" alt="" />
          </div>
          <div className="description">
            <h3 className="title">러브 제주 에디션</h3>
            러브제주에디션은 많은 사람들로부터 사랑을 받으면 받을수록 심각해질
            수 밖에 없는 관광지의 쓰레기 문제에 대한 플리츠마마만의 해법을
            제시한 프로젝트입니다. 또한 국내산 폐페트병을 수거하여 고품질의
            섬유로 리사이클하는데 성공한 최초의 사례이기도 합니다. 플리츠마마는
            러브제주에디션을 통해 100% 제주 폐페트병을 리사이클한 폴리에스터
            원사 ‘리젠제주’와 100%리사이클 스판덱스 ‘크레오라 리젠’을 세계
            최초로 상용화했습니다.
          </div>
        </article>
        <div className="arccodian">
          <input type="ckeckbox" className="check" />
          <h3 className="header">
            위플리츠의 특별함
            <i className="fa-solid fa-chevron-down" />
          </h3>
          <div className="content">
            <h3 className="title">다채로운 색상</h3>
            필링 테스트 4~4.5로 우수한 마찰 견뢰도를 보이고 있습니다. 그러나 한
            부분만 반복적으로 마찰에 노출되면 보풀이 발생할 수 있습니다. 이럴
            경우 소비자 상담실로 A/S 요청하시면 깨끗하게 제거해 드립니다. * 마찰
            견뢰도는 1~5등급으로 숫자가 클수록 보풀이 적게 발생한다는
            의미입니다. 울이 섞인 일반적인 스웨터가 대략 3~3.5급 정도 받으면
            합격 판정을받고 캐시미어나 앙고라 같이 헤어가 긴 섬유는 2~3급 정도시
            별도의 취급주의 택을 부착하여 출시 합니다.
          </div>
        </div>
        <div className="arccodian">
          <input type="ckeckbox" className="check" />
          <h3 className="header">
            배송 / 반품 / 교환
            <i className="fa-solid fa-chevron-down" />
          </h3>
          <div className="content">
            <h3 className="title">배송안내</h3>
            주문 기준 3일내 출고를 원칙으로 합니다.(영업일 기준)출고 후 1~3일
            이내 받아보실 수 있습니다. (택배 영업소 사정에 따라 다소 차이가 있을
            수 있습니다.)운송장번호 조회를 통해 배송과정을 확인하실 수
            있습니다.일시 품절 및 제품 공급이 불가능 할 경우 결제일로부터
            4영업일 이내 고객님께 안내 후 환불해드립니다.
            <h3 className="title">반품 / 교환 안내</h3>
            원단, 봉제 불량 또는 제품 하자의 경우 구입일로 부터 2주 이내 무상
            수선 또는 교환, 환불이 가능합니다. 출고 후 1~3일 이내 받아보실 수
            있습니다.상품하자 이외 사이즈, 색상 교환 또는 단순 착오나 변심에
            의한 교환/반품 시 택배비는 고객 부담입니다.(왕복택배비 6천원
            본인부담)또한 사이즈, 색상 교환, 단순 착오나 변심에 의한 교환의 경우
            제품 회수가 완료된 후 교환 요청한 제품이 배송되는 점 참고 바랍니다.
          </div>
        </div>
        <div className="arccodian">
          <input type="ckeckbox" className="check" />
          <h3 className="header">
            사이즈
            <i className="fa-solid fa-chevron-down" />
          </h3>
          <div className="content">100x100x100</div>
        </div>
      </section>
    </div>
  );
}

export default Product;

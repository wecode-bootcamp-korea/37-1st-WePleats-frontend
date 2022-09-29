import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';

function Main() {
  // ** 상단 쿠폰bar 무빙기능 **
  const [fadeInFirst, setFadeInFirst] = useState('');
  const [fadeInSecond, setFadeInSecond] = useState('');
  const [fadeInThird, setFadeInThird] = useState('');
  const [fadeInForth, setFadeInForth] = useState('');
  const [fadeInFifth, setFadeInFifth] = useState('');
  const [vwForSlide, setVwForSlide] = useState(25);
  const [bestItems, setBestItems] = useState([]);
  const [isMouseOver, setMouseOver] = useState(0);
  const [newItems, setNewItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('http://172.20.10.10:3000/category/best', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(json => setBestItems(json.getProducts));

    fetch('/data/newItems.json')
      .then(res => res.json())
      .then(json => setNewItems(json.category));

    setFadeInFirst(' fadeIn');
    setTimeout(() => {
      setFadeInSecond(' fadeIn');
    }, 200);
    window.addEventListener('scroll', thirdPopUp);
  }, []);

  const thirdPopUp = () => {
    if (window.scrollY >= 600) {
      setFadeInThird(' fadeIn');
    }
    if (window.scrollY >= 1300) {
      setFadeInForth(' fadeIn');
      setTimeout(() => {
        setFadeInFifth(' fadeIn');
      }, 200);
    }
  };

  const size = window.innerWidth;

  useEffect(() => {
    if (size <= 990) {
      setVwForSlide(33.3);
    } else if (size > 990 && size <= 1541) {
      setVwForSlide(25);
    } else if (size > 1541) {
      setVwForSlide(20);
    }
  }, [size]);
  //** 상단 슬라이드 **
  const [indexForUpper, setIndexForUpper] = useState(0);
  const [animateForUpper, setAnimateForUpper] = useState(' animate');

  const upperSlideLeft = () => {
    setIndexForUpper(current => current - 1);
  };

  const upperSlideRight = () => {
    setIndexForUpper(current => current + 1);
  };

  const moveUpperSlide = indexForUpper * 41;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexForUpper(current => current + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [indexForUpper]);

  useEffect(() => {
    if (
      indexForUpper === newItems.length ||
      indexForUpper === -newItems.length
    ) {
      setTimeout(() => {
        setAnimateForUpper('');
        setIndexForUpper(0);
      }, 600);

      setTimeout(() => {
        setAnimateForUpper(' animate');
      }, 700);
    }
  }, [indexForUpper]);

  //** 아랫쪽 슬라이드  **
  const [indexForLower, setIndexForLower] = useState(0);
  const [animateForLower, setAnimateForLower] = useState(' animate');

  const lowerSlideLeft = () => {
    setIndexForLower(current => current - 1);
  };

  const lowerSlideRight = () => {
    setIndexForLower(current => current + 1);
  };

  const moveLowerSlide = indexForLower * vwForSlide;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexForLower(current => current + 1);
    }, 4000);

    if (
      indexForLower === bestItems.length ||
      indexForLower === -bestItems.length
    ) {
      setTimeout(() => {
        setAnimateForLower('');
        setIndexForLower(0);
      }, 600);

      setTimeout(() => {
        setAnimateForLower(' animate');
      }, 700);
    }

    return () => clearInterval(interval);
  }, [indexForLower]);

  const test = () => {
    alert('구라야^^');
  };

  const makeHover = event => {
    setMouseOver(Number(event.target.id));
  };

  const deleteHover = () => {
    setMouseOver(-1);
  };

  const goNew = () => {
    navigate('/category/new');
  };

  const goBest = () => {
    navigate('/category/best');
  };

  const goSticker = () => {
    navigate('/category?category=sub&id=12');
  };

  const goProduct = event => {
    navigate(`/product/${Number(event.target.id)}`);
  };

  if (!bestItems) return;

  return (
    <div className="outerBox">
      <div className="couponBox">
        <div className="movingTextBox" onClick={test}>
          <div className="movingText1">누르면 쿠폰지급^^</div>
          <div className="movingText2">누르면 쿠폰지급^^</div>
        </div>
      </div>
      <div className="contentsBox">
        <div className="upperBox">
          <div className="spaceBox" />
          <div className="mainPicBox">
            <div className={`newestItem${fadeInFirst}`} onClick={goNew}>
              <div
                className={`upperSlideBox${animateForUpper}`}
                style={{
                  transform: `translate(${
                    -newItems.length * 41 - moveUpperSlide
                  }vw)`,
                }}
              >
                {newItems.map(el => (
                  <div className="pictureBox1 copied" key={el.id}>
                    <img
                      className="mainPic"
                      src={el.thumbnail_url}
                      alt="newest"
                    />
                  </div>
                ))}
                {newItems.map(el => (
                  <div className="pictureBox1" key={el.id}>
                    <img
                      className="mainPic"
                      src={el.thumbnail_url}
                      alt="newest"
                    />
                  </div>
                ))}
                {newItems.map(el => (
                  <div className="pictureBox1 copied" key={el.id}>
                    <img
                      className="mainPic"
                      src={el.thumbnail_url}
                      alt="newest"
                    />
                  </div>
                ))}
              </div>
              <img
                className="upperSlideBtnLeft"
                onClick={upperSlideLeft}
                src="/images/arrowLeftWhite.png"
                alt="arrow"
              />
              <img
                className="upperSlideBtnRight"
                onClick={upperSlideRight}
                src="/images/arrowRightWhite.png"
                alt="arrow"
              />
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                />
                <span> 2022 FW 1st Drop, "The Today Debugger"</span>
              </div>
            </div>
            <div className={`bestItem${fadeInSecond}`} onClick={goBest}>
              <div className="pictureBox2">
                <img
                  className="mainPic"
                  src="/images/mainSecond.jpg"
                  alt="best"
                />
              </div>
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                />
                <span> 꾸준히 사랑받는 베스트 아이템 확인하기</span>
              </div>
            </div>
          </div>
          <div className="spaceBox" />
        </div>
        <div className={`middleUpperBox${fadeInThird}`}>
          <img
            className="lowerSlideBtnLeft"
            onClick={lowerSlideLeft}
            src="/images/arrowLeft.png"
            alt="arrowBtn"
          />
          <img
            className="lowerSlideBtnRight"
            onClick={lowerSlideRight}
            src="/images/arrowRight.png"
            alt="arrowBtn"
          />
          <div className="spaceBox" />
          <div
            className={`productSlideBox${animateForLower}`}
            style={{
              transform: `translate(${
                -bestItems.length * vwForSlide - moveLowerSlide
              }vw)`,
            }}
          >
            {bestItems.map(el => (
              <div className="slideContents copied" key={el.id}>
                <div className="slideImageBox">
                  <img
                    src={
                      el.id === isMouseOver
                        ? el.thumbnail_url[1]
                        : el.thumbnail_url[0]
                    }
                    alt="sample"
                    style={{
                      width: `${vwForSlide}vw`,
                      height: `${vwForSlide * 1.2}vw`,
                      objectFit: 'cover',
                    }}
                    onMouseOver={makeHover}
                    onMouseLeave={deleteHover}
                    id={el.id}
                    onClick={goProduct}
                  />
                </div>
                <div className="slideTextBox">
                  <div className="slideProductName">{el.name}</div>
                  <div className="slideProductPrice">
                    {el.price.toLocaleString()}원
                  </div>
                </div>
              </div>
            ))}
            {bestItems.map(el => (
              <div className="slideContents" key={el.id}>
                <div className="slideImageBox">
                  <img
                    src={
                      el.id === isMouseOver
                        ? el.thumbnail_url[1]
                        : el.thumbnail_url[0]
                    }
                    alt="sample"
                    style={{
                      width: `${vwForSlide}vw`,
                      height: `${vwForSlide * 1.2}vw`,
                      objectFit: 'cover',
                    }}
                    onMouseOver={makeHover}
                    onMouseLeave={deleteHover}
                    id={el.id}
                    onClick={goProduct}
                  />
                </div>
                <div className="slideTextBox">
                  <div className="slideProductName">{el.name}</div>
                  <div className="slideProductPrice">
                    {el.price.toLocaleString()}원
                  </div>
                </div>
              </div>
            ))}
            {bestItems.map(el => (
              <div className="slideContents copied" key={el.id}>
                <div className="slideImageBox">
                  <img
                    src={
                      el.id === isMouseOver
                        ? el.thumbnail_url[1]
                        : el.thumbnail_url[0]
                    }
                    alt="sample"
                    style={{
                      width: `${vwForSlide}vw`,
                      height: `${vwForSlide * 1.2}vw`,
                      objectFit: 'cover',
                    }}
                    onMouseOver={makeHover}
                    onMouseLeave={deleteHover}
                    id={el.id}
                    onClick={goProduct}
                  />
                </div>
                <div className="slideTextBox">
                  <div className="slideProductName">{el.name}</div>
                  <div className="slideProductPrice">
                    {el.price.toLocaleString()}원
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="spaceBox" />
        </div>
        <div className="middleBottomBox">
          <div className="spaceBox" />
          <div className="mainPicBox">
            <a href="https://wecode.co.kr/">
              <div className={`middleBottomFirstBox${fadeInForth}`}>
                <div className="pictureBox1">
                  <img
                    className="mainPic"
                    src="/images/set4.jpeg"
                    alt="newest"
                  />
                </div>
                <div className="mainPicTextBox">
                  <img
                    className="direction"
                    src="/images/right-direction.png"
                    alt="direction"
                  />
                  <span> 새로운 프로젝트를 기다리는 설렘</span>
                </div>
              </div>
            </a>
            <a href="https://wecode.co.kr/consult">
              <div className={`middleBottomSecondBox${fadeInFifth}`}>
                <div className="pictureBox2">
                  <img
                    className="mainPic"
                    src="/images/wecode.jpg"
                    alt="best"
                  />
                </div>
                <div className="mainPicTextBox">
                  <img
                    className="direction"
                    src="/images/right-direction.png"
                    alt="direction"
                  />
                  <span> 수강생을 기다리는 위코드</span>
                </div>
              </div>
            </a>
          </div>
          <div className="spaceBox" />
        </div>
        <div className="bottomBox">
          <div className="eventContentsBox">
            <div className="eventInsideBox">
              <div className="innerContentsBox">
                <div className="eventImgBox" onClick={goSticker}>
                  <img src="/images/sticker.jpg" alt="sample" />
                </div>
                <div>GET STICKER</div>
              </div>
              <div className="innerContentsBox">
                <div className="eventImgBox">
                  <img
                    className="extraOne"
                    src="/images/cutYourMac.jpg"
                    alt="sample"
                  />
                </div>
                <div>CUT YOUR MAC</div>
              </div>
              <div className="innerContentsBox">
                <div className="eventImgBox">
                  <img src="/images/gangNam.jpg" alt="sample" />
                </div>
                <div>WECODE FREE BEER</div>
              </div>
            </div>
          </div>
          <div className="spaceBox" />
        </div>
        <div className="footerSpaceBox" />
      </div>
    </div>
  );
}

export default Main;

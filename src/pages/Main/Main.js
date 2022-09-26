import React, { useEffect, useState } from 'react';
import './Main.scss';

function Main() {
  const [bestItems, setBestItems] = useState([]);
  const [newItems, setNewItems] = useState([]);

  useEffect(() => {
    fetch('/data/mainNew.json', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjM4NDU3ODF9.2aFMvfGNMWWlBhf0MNQhiUCN5cHp3OceDIvZqf2JylA',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  // ** 상단 쿠폰bar 무빙기능 **
  const [vwForCoupon, setVwForCoupon] = useState(0);
  const [animateForCoupon, setAnimateForCoupon] = useState(' animate');

  useEffect(() => {
    const interval = setInterval(() => {
      setVwForCoupon(current => current + 100);
    }, 2100);

    return () => clearInterval(interval);
  }, [vwForCoupon]);

  const couponVwValue = vwForCoupon;

  if (couponVwValue === 100) {
    setTimeout(() => {
      setAnimateForCoupon('');
      setVwForCoupon(0);
    }, 2000);
    setTimeout(() => {
      setAnimateForCoupon(' animate');
    }, 2100);
  }

  //** 상단 슬라이드 이미지 **
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
    }, 6000);
    return () => clearInterval(interval);
  }, [indexForUpper]);

  if (
    indexForUpper === mok_Main_Best.length ||
    indexForUpper === -mok_Main_Best.length
  ) {
    setTimeout(() => {
      setAnimateForUpper('');
      setIndexForUpper(0);
    }, 600);

    setTimeout(() => {
      setAnimateForUpper(' animate');
    }, 700);
  }

  //** 아랫쪽 슬라이드 이미지 **
  const [indexForLower, setIndexForLower] = useState(0);
  const [animateForLower, setAnimateForLower] = useState(' animate');

  const lowerSlideLeft = () => {
    setIndexForLower(current => current - 1);
  };

  const lowerSlideRight = () => {
    setIndexForLower(current => current + 1);
  };

  const moveLowerSlide = indexForLower * 25;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexForLower(current => current + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [indexForLower]);

  if (
    indexForLower === mok_Main_New.length ||
    indexForLower === -mok_Main_New.length
  ) {
    setTimeout(() => {
      setAnimateForLower('');
      setIndexForLower(0);
    }, 600);

    setTimeout(() => {
      setAnimateForLower(' animate');
    }, 700);
  }

  return (
    <div className="outerBox">
      <div className="couponBox">
        <div
          className={`movingTextBox${animateForCoupon}`}
          style={{ transform: `translate(${vwForCoupon}vw)` }}
        >
          <div className="movingText1">누르면 쿠폰지급^^</div>
          <div className="movingText2">누르면 쿠폰지급^^</div>
        </div>
      </div>
      <div className="contentsBox">
        <div className="upperBox">
          <div className="spaceBox" />
          <div className="mainPicBox">
            <div className="newestItem">
              <div
                className={`upperSlideBox${animateForUpper}`}
                style={{
                  transform: `translate(${
                    -mok_Main_Best.length * 41 - moveUpperSlide
                  }vw)`,
                }}
              >
                {mok_Main_Best.map(el => (
                  <div className="pictureBox1 copied" key={el.id}>
                    <img className="mainPic" src={el.imgURL2} alt="newest" />
                  </div>
                ))}
                {mok_Main_Best.map(el => (
                  <div className="pictureBox1" key={el.id}>
                    <img className="mainPic" src={el.imgURL2} alt="newest" />
                  </div>
                ))}
                {mok_Main_Best.map(el => (
                  <div className="pictureBox1 copied" key={el.id}>
                    <img className="mainPic" src={el.imgURL2} alt="newest" />
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
                <span> 2022 FW 1st Drop, "The Daily Traveler"</span>
              </div>
            </div>
            <div className="bestItem">
              <div className="pictureBox2">
                <img
                  className="mainPic"
                  src="/images/sample2.jpeg"
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
        <div className="middleUpperBox">
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
                -mok_Main_New.length * 25 - moveLowerSlide
              }vw)`,
            }}
          >
            {mok_Main_New.map(el => (
              <div className="slideContents copied" key={el.id}>
                <div className="slideImageBox">
                  <img src={el.imgURL1} alt="sample" />
                </div>
                <div className="slideTextBox">
                  <div className="slideProductName">{el.productName}</div>
                  <div className="slideProductPrice">{el.price}</div>
                </div>
              </div>
            ))}
            {mok_Main_New.map(el => (
              <div className="slideContents" key={el.id}>
                <div className="slideImageBox">
                  <img src={el.imgURL1} alt="sample" />
                </div>
                <div className="slideTextBox">
                  <div className="slideProductName">{el.productName}</div>
                  <div className="slideProductPrice">{el.price}</div>
                </div>
              </div>
            ))}
            {mok_Main_New.map(el => (
              <div className="slideContents copied" key={el.id}>
                <div className="slideImageBox">
                  <img src={el.imgURL1} alt="sample" />
                </div>
                <div className="slideTextBox">
                  <div className="slideProductName">{el.productName}</div>
                  <div className="slideProductPrice">{el.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="spaceBox" />
        </div>
        <div className="middleBottomBox">
          <div className="spaceBox" />
          <div className="mainPicBox">
            <div className="newestItem">
              <div className="pictureBox1">
                <img
                  className="mainPic"
                  src="/images/sample1.jpeg"
                  alt="newest"
                />
              </div>
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                />
                <span> 새로운 계절을 기다리는 설렘</span>
              </div>
            </div>
            <div className="bestItem">
              <div className="pictureBox2">
                <img
                  className="mainPic"
                  src="/images/sample2.jpeg"
                  alt="best"
                />
              </div>
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                />
                <span> 러브에디션</span>
              </div>
            </div>
          </div>
          <div className="spaceBox" />
        </div>
        <div className="bottomBox">
          <div className="eventContentsBox">
            <div className="eventInsideBox">
              <div className="innerContentsBox">
                <img src="/images/sample1.jpeg" alt="sample" />
                <div>OCEAN EDITION</div>
              </div>
              <div className="innerContentsBox">
                <img src="/images/sample1.jpeg" alt="sample" />
                <div>PROCESS OF PLASTIC TURNING INTO PLEATSMAMA</div>
              </div>
              <div className="innerContentsBox">
                <img src="/images/sample1.jpeg" alt="sample" />
                <div>PLMA_LAb edition</div>
              </div>
            </div>
          </div>
          <div className="spaceBox" />
        </div>
        <div className="footerSpaceBox" />
      </div>
    </div>
  );
  return <div>Main!</div>;
}

export default Main;

const mok_Main_New = [
  {
    id: 1,
    productName: 'good',
    price: '59,000원',
    imgURL1: '/images/sample1.jpeg',
    imgURL2: '',
  },
  {
    id: 2,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 3,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 4,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 5,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 6,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 7,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 8,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 9,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 10,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 11,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
  {
    id: 12,
    productName: 'good',
    price: '59,000원',
    imgURL1:
      'https://velog.velcdn.com/images/rayong/post/a04a2a62-2352-4827-8190-eaa84dcbec7f/image.jpg',
    imgURL2: '',
  },
];

const mok_Main_Best = [
  { id: 1, productName: 'bad', imgURL1: '', imgURL2: '/images/sample1.jpeg' },
  { id: 2, productName: 'bad', imgURL1: '', imgURL2: '/images/sample2.jpeg' },
  { id: 3, productName: 'bad', imgURL1: '', imgURL2: '/images/sample12.jpeg' },
  { id: 4, productName: 'bad', imgURL1: '', imgURL2: '/images/sample4.jpeg' },
  { id: 5, productName: 'bad', imgURL1: '', imgURL2: '/images/sample5.jpeg' },
  { id: 6, productName: 'bad', imgURL1: '', imgURL2: '/images/sample6.jpeg' },
];

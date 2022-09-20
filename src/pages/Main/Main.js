import React, { useEffect, useState } from 'react';
import './Main.scss';

function Main() {
  const [position, setPosition] = useState(0);
  const [clicked, setClicked] = useState(0);
  const slideLeft = () => {
    setPosition(current => current + 25);
    setClicked(current => current + 1);
  };

  const slideRight = () => {
    setPosition(current => current - 25);
    setClicked(current => current + 1);
  };

  // const intervalSlide = () => {

  // };

  // const clearSlideInterval = clearInterval(intervalSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(current => current - 25);
      console.log('5초가 지났습니다');
    }, 5000);
    // intervalSlide();

    return () => clearInterval(interval);
  }, [clicked]);
  console.log(position);
  // const timeForCarusel = () => {
  //   setInterval(() => {
  //     setPosition(current => current - 25);
  //   }, 3000);
  //   console.log(position);
  // };

  // timeForCarusel();

  return (
    <div className="outerBox">
      <div className="couponBox"></div>
      <div className="contentsBox">
        <div className="upperBox">
          <div className="spaceBox"></div>
          <div className="mainPicBox">
            <div className="newestItem">
              <div className="pictureBox1">
                <img
                  className="mainPic"
                  src="/images/sample1.jpeg"
                  alt="newest"
                ></img>
              </div>
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                ></img>
                <span> 2022 FW 1st Drop, "The Daily Traveler"</span>
              </div>
            </div>
            <div className="bestItem">
              <div className="pictureBox2">
                <img
                  className="mainPic"
                  src="/images/sample2.jpeg"
                  alt="best"
                ></img>
              </div>
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                ></img>
                <span> 꾸준히 사랑받는 베스트 아이템 확인하기</span>
              </div>
            </div>
          </div>
          <div className="spaceBox"></div>
        </div>
        <div className="middleUpperBox">
          <img
            className="slideBtnLeft"
            onClick={slideLeft}
            src="/images/arrowLeft.png"
            alt="arrowBtn"
          />
          <img
            className="slideBtnRight"
            onClick={slideRight}
            src="/images/arrowRight.png"
            alt="arrowBtn"
          />
          <div className="spaceBox"></div>
          <div
            className="productSlideBox"
            style={{ transform: `translate(${position}vw)` }}
          >
            {mok_Main_New.map(el => (
              <div className="slideContents" key={el.id}>
                <div className="slideImageBox">
                  <img src={el.imgURL1} alt="sample"></img>
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
                  <img src={el.imgURL1} alt="sample"></img>
                </div>
                <div className="slideTextBox">
                  <div className="slideProductName">{el.productName}</div>
                  <div className="slideProductPrice">{el.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="spaceBox"></div>
        </div>
        <div className="middleBottomBox">
          <div className="spaceBox"></div>
          <div className="mainPicBox">
            <div className="newestItem">
              <div className="pictureBox1">
                <img
                  className="mainPic"
                  src="/images/sample1.jpeg"
                  alt="newest"
                ></img>
              </div>
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                ></img>
                <span> 새로운 계절을 기다리는 설렘</span>
              </div>
            </div>
            <div className="bestItem">
              <div className="pictureBox2">
                <img
                  className="mainPic"
                  src="/images/sample2.jpeg"
                  alt="best"
                ></img>
              </div>
              <div className="mainPicTextBox">
                <img
                  className="direction"
                  src="/images/right-direction.png"
                  alt="direction"
                ></img>
                <span> 러브에디션</span>
              </div>
            </div>
          </div>
          <div className="spaceBox"></div>
        </div>
        <div className="bottomBox">
          <div className="eventContentsBox">
            <div className="eventInsideBox">
              <div className="innerContentsBox">
                <img src="/images/sample1.jpeg" alt="sample"></img>
                <div>OCEAN EDITION</div>
              </div>
              <div className="innerContentsBox">
                <img src="/images/sample1.jpeg" alt="sample"></img>
                <div>PROCESS OF PLASTIC TURNING INTO PLEATSMAMA</div>
              </div>
              <div className="innerContentsBox">
                <img src="/images/sample1.jpeg" alt="sample"></img>
                <div>PLMA_LAb edition</div>
              </div>
            </div>
          </div>
          <div className="spaceBox"></div>
        </div>
        <div className="footerSpaceBox"></div>
      </div>
    </div>
  );
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
  { id: 3, productName: 'bad', imgURL1: '', imgURL2: '' },
  { id: 4, productName: 'soso', imgURL1: '', imgURL2: '' },
];

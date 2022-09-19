import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div className="outerBox">
      <div className="couponBox"></div>
      <div className="contentsBox">
        <div className="upperBox">
          <div className="spaceBox"></div>
          <div className="mainPicBox"></div>
          <div className="spaceBox"></div>
        </div>
        <div className="middleUppperBox">
          <div className="spaceBox"></div>
          <div className="productSlideBox"></div>
          <div className="spaceBox"></div>
        </div>
        <div className="middleBottomBox">
          <div className="spaceBox"></div>
          <div className="mainStoryBox"></div>
          <div className="spaceBox"></div>
        </div>
        <div className="bottomBox">
          <div className="mainPicBox"></div>
          <div className="spaceBox"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;

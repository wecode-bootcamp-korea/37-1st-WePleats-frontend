import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './Review.scss';

function Review({ reviews, productId }) {
  const [isClicked, setIsClicked] = useState(false);

  const clickedModal = () => {
    setIsClicked(current => !current);
  };

  return (
    <section className="review">
      <div className="header">
        <h1 className="title">구매평({reviews.length})</h1>
        <div className="text">상품을 구매하신 분들이 작성한 리뷰입니다.</div>
        <button className="button" onClick={clickedModal}>
          구매평 작성
        </button>
        {isClicked && (
          <Modal clickedModal={clickedModal} productId={productId} />
        )}
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
                    {item.create_at.slice(0, 10)} {item.create_at.slice(11, 16)}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </section>
  );
}

export default Review;

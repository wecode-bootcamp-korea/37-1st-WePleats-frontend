import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import EditModal from '../Modal/EditModal/EditModa';
import './Review.scss';

function Review({ productId }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [reviews, setReviews] = useState();
  // http://172.20.10.10:3000/review/1
  useEffect(() => {
    fetch('data/reviews.json', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjM4NDU3ODF9.2aFMvfGNMWWlBhf0MNQhiUCN5cHp3OceDIvZqf2JylA',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setReviews(data.review);
      });
  }, []);

  const clickedModal = () => {
    setIsClicked(current => !current);
  };
  console.log(reviews);
  const editedModal = () => {
    setIsEdit(current => !current);
  };

  const deleteThis = e => {
    fetch(
      `http://172.20.10.10:3000/review?reviewId=${Number(
        e.target.id
      )}&productId=${productId}`,
      {
        method: 'DELETE',
        headers: {
          authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjM4NDU3ODF9.2aFMvfGNMWWlBhf0MNQhiUCN5cHp3OceDIvZqf2JylA',
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setReviews(data.review);
      });
  };

  return (
    <section className="review">
      <div className="header">
        <h1 className="title">구매평({reviews && reviews.length})</h1>
        {/* <h1 className="title">구매평</h1> */}
        <div className="text">상품을 구매하신 분들이 작성한 리뷰입니다.</div>
        <div className="reviewBtn">
          <button className="addBtn" onClick={clickedModal}>
            구매평 작성
          </button>
          {isClicked && (
            <Modal
              clickedModal={clickedModal}
              productId={productId}
              setReview={setReviews}
            />
          )}
        </div>
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
                    {item.image_url !== null ? (
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
                  {item.control !== null && (
                    <div className="editReviewBtn">
                      <button className="editBtn" onClick={editedModal}>
                        <i className="fa-regular fa-pen-to-square" />
                      </button>
                      <button className="deleteBtn">
                        <i
                          id={item.id}
                          onClick={deleteThis}
                          className="fa-regular fa-trash-can"
                        />
                      </button>
                    </div>
                  )}
                  {isEdit && (
                    <EditModal
                      reviews={reviews}
                      editedModal={editedModal}
                      productId={productId}
                    />
                  )}
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

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Modal from '../Modal/Modal';
import EditModal from '../Modal/EditModal/EditModal';
import './Review.scss';

function Review({ productId }) {
  const [reviews, setReviews] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const [isClicked, setIsClicked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  // reviews/offset=${offset}&limit=5
  useEffect(() => {
    fetch('data/reviews.json', {
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
  }, [offset]);

  const movePage = pageNumber => {
    searchParams.set('offset', (pageNumber - 1) * 5);
    setSearchParams(searchParams);
  };

  const previousPage = e => {
    searchParams.set('offset', Number(e.target) - 1);
    setSearchParams(searchParams);
  };

  const nextPage = e => {
    searchParams.set('offset', Number(e.target) + 1);
    setSearchParams(searchParams);
  };

  const clickedModal = () => {
    setIsClicked(current => !current);
  };

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

  const filteredReviews = reviews.filter(review => review.image_url);
  const currReview = isFiltered ? filteredReviews : reviews;

  return (
    <section className="review">
      <div className="header">
        <h1 className="title">구매평({reviews && reviews.length})</h1>
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
          <span className="text" onClick={() => setIsFiltered(!isFiltered)}>
            {isFiltered ? '전체 보기' : '포토 구매평만 보기'}
          </span>
        </div>
      </div>
      <div className="border" />
      <ul className="lists">
        {currReview.map(item => {
          return (
            <li key={item.id} className="list">
              <div className="content">
                <h3 className="review">{item.comment}</h3>
                <ul className="images">
                  {item.image_url && (
                    <li className="image">
                      <img
                        className="img"
                        src={item.image_url}
                        alt="reviewImg"
                      />
                    </li>
                  )}
                </ul>
              </div>
              <div className="userInfo">
                {item.control && (
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
                    reviews={reviews.find(({ control }) => control)}
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
      <nav className="page">
        <ul className="pagination">
          <li className="pageNum" onClick={previousPage}>
            <i className="fa-solid fa-chevron-left" />
          </li>
          <li className="pageNum" onClick={() => movePage(1)}>
            1
          </li>
          <li className="pageNum" onClick={() => movePage(2)}>
            2
          </li>
          <li className="pageNum" onClick={() => movePage(3)}>
            3
          </li>
          <li className="pageNum" onClick={() => movePage(4)}>
            4
          </li>
          <li className="pageNum" onClick={() => movePage(5)}>
            5
          </li>
          <li className="pageNum">
            <i className="fa-solid fa-chevron-right" onClick={nextPage} />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Review;

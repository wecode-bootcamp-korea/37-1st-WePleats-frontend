import React, { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';
import './Review.scss';

function Review({ product }) {
  const [reviews, setReviews] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [selectModal, setSelectModal] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(
      `http://172.20.10.10:3000/review/${product.id}?offset=${offset}&limit=5`,
      {
        headers: {
          authorization: localStorage.getItem('TOKEN'),
          'Content-Type': 'application/json;charset=utf-8',
        },
      }
    )
      .then(res => res.json())
      .then(data => {
        setReviews(data.review);
      });
  }, [offset]);

  const maxNumber = Math.ceil(product.reviewCount / 5);
  const pageCountArr = (reviews => {
    let result = [];

    for (let i = 1; i <= maxNumber; i++) {
      result.push(i);
    }

    return result;
  })(reviews);

  const movePage = pageNumber => {
    setOffset((pageNumber - 1) * 5);
  };

  const pageNumberNow = offset / 5 + 1;

  const movePrevious = () => {
    if (pageNumberNow === 1) return;

    setOffset((pageNumberNow - 2) * 5);
  };

  const moveNext = () => {
    if (pageNumberNow === maxNumber) return;
    setOffset(pageNumberNow * 5);
  };

  const clickedModal = () => {
    setIsClicked(current => !current);
  };

  const editedModal = () => {
    setIsEdit(current => !current);
    setSelectModal(current => !current);
  };

  const deleteThis = e => {
    fetch(
      `http://172.20.10.10:3000/review/?productId=${
        product.id
      }&reviewId=${Number(e.target.id)}`,
      {
        method: 'DELETE',
        headers: {
          authorization: localStorage.getItem('TOKEN'),
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
        <h1 className="title">구매평({product.reviewCount})</h1>
        <div className="text">상품을 구매하신 분들이 작성한 리뷰입니다.</div>
        <div className="reviewBtn">
          <button className="addBtn" onClick={clickedModal}>
            구매평 작성
          </button>
          {isClicked && (
            <Modal
              clickedModal={clickedModal}
              productId={product.id}
              reviewInfo={setReviews}
              selectModal={selectModal}
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
                <p className="userId">{item.name}</p>
                <p className="postTime">
                  {item.create_at.slice(0, 10)} {item.create_at.slice(11, 16)}
                </p>
              </div>
            </li>
          );
        })}
        {isEdit && (
          <Modal
            clickedModal={editedModal}
            productId={product.id}
            reviewInfo={reviews.find(({ control }) => control)}
            selectModal={selectModal}
          />
        )}
      </ul>
      <nav className="page">
        <ul className="pagination">
          <li className="pageNum">
            <i className="fa-solid fa-chevron-left" onClick={movePrevious} />
          </li>
          {pageCountArr.map(number => (
            <li
              key={number}
              className={pageNumberNow === number ? 'pageNum bold' : 'pageNum'}
              onClick={() => movePage(number)}
            >
              {number}
            </li>
          ))}
          <li className="pageNum">
            <i className="fa-solid fa-chevron-right" onClick={moveNext} />
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Review;

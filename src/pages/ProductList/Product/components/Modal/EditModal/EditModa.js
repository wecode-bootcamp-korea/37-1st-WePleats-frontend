import React, { useState, useRef, useEffect } from 'react';
import './EditModal.scss';

function EditModal({ editedModal, reviews, productId }) {
  const [imageUrl, setImageUrl] = useState([]);
  const [review, setReview] = useState([]);
  const imgRef = useRef();

  const filterReview = reviews.filter(review => review.control !== null);

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    setImageUrl(filterReview[0].image_url);
    setReview(filterReview[0].comment);
    return () => (document.body.style = `overflow: auto`);
  }, []);

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const changeValue = e => {
    setReview(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const editModal = document.getElementById('editModal');
    const formData = new FormData(editModal);
    formData.append('productId', productId);
    formData.append('reviewId', filterReview[0].id);

    fetch('http://172.20.10.10:3000/review', {
      method: 'PATCH',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjM4NDU3ODF9.2aFMvfGNMWWlBhf0MNQhiUCN5cHp3OceDIvZqf2JylA',
        enctype: 'multipart/form-data',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Update Review Sucess') {
          alert('수정 완료');
          editedModal();
          setReview(data);
        } else {
          alert('수정 실패');
        }
      });
  };

  return (
    <>
      <div className="overlay" onClick={editedModal} />
      <form id="editModal" onSubmit={onSubmit}>
        <div className="modalHeader">
          <h1 className="modalTitle">구매평 수정</h1>
          <button className="btn" onClick={editedModal}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="modalContent">
          <label className="modalLabel" htmlFor="reviewImg" title="리뷰이미지">
            <img className="img" src={imageUrl} alt="uploadImg" />
            <input
              id="reviewImg"
              type="file"
              name="image"
              ref={imgRef}
              onChange={onChangeImage}
            />
          </label>
          <textarea
            name="comment"
            id="writeReviews"
            value={review}
            onChange={changeValue}
          />
        </div>
        <div className="modalbtns">
          <button className="modalbtn cancel" onClick={editedModal}>
            취소
          </button>
          <button className="modalbtn complete">완료</button>
        </div>
      </form>
    </>
  );
}

export default EditModal;

import React, { useState, useEffect } from 'react';
import './Modal.scss';

function Modal({ clickedModal, productId, reviewInfo, selectModal }) {
  const [imageUrl, setImageUrl] = useState(reviewInfo.image_url);
  const [registComment, setRegistComment] = useState('');
  const [editComment, setEditComment] = useState(reviewInfo.comment);

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  const onChangeImage = e => {
    e.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const changeValue = e => {
    setEditComment(e.target.value);
  };

  const registValue = e => {
    setRegistComment(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('image', imageUrl);
    formData.append('comment', registComment);

    fetch('http://172.20.10.10:3000/review', {
      method: 'POST',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjM4NDU3ODF9.2aFMvfGNMWWlBhf0MNQhiUCN5cHp3OceDIvZqf2JylA',
        enctype: 'multipart/form-data',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'Create Review Success') {
          clickedModal();
          reviewInfo(data.review);
        } else {
          alert('리뷰 등록 실패');
        }
      });
  };

  const onEdit = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('reviewId', reviewInfo.id);
    formData.append('image', imageUrl);
    formData.append('comment', editComment);

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
          clickedModal();
        } else {
          alert('수정 실패');
        }
      });
  };

  return (
    <>
      <div className="overlay" onClick={clickedModal} />
      <form id="modal" onSubmit={selectModal ? onSubmit : onEdit}>
        <div className="modalHeader">
          <h1 className="modalTitle">
            {selectModal ? '구매평 작성' : '구매평 수정'}
          </h1>
          <button className="btn" onClick={clickedModal}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="modalContent">
          <label
            className="modalLabel"
            htmlFor="reviewImg"
            title="업로드 이미지"
          >
            {imageUrl ? (
              <img className="img" src={imageUrl} alt="uploadImg" />
            ) : (
              <div className="modalBox">
                <i className="fa-solid fa-camera-retro" />
                <h3 className="modalName">사진 첨부하기</h3>
              </div>
            )}
            <input
              id="reviewImg"
              type="file"
              name="image"
              onChange={onChangeImage}
            />
          </label>
          {selectModal ? (
            <textarea
              name="comment"
              id="writeReviews"
              placeholder="소중한 후기를 남겨주세요"
              value={registComment}
              onChange={registValue}
            />
          ) : (
            <textarea
              name="comment"
              id="writeReviews"
              value={editComment}
              onChange={changeValue}
            />
          )}
        </div>
        <div className="modalbtns">
          <button className="modalbtn cancel" onClick={clickedModal}>
            취소
          </button>
          <button className="modalbtn complete">완료</button>
        </div>
      </form>
    </>
  );
}

export default Modal;

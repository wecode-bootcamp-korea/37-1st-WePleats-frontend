import React, { useState, useRef } from 'react';
import './Modal.scss';

function Modal({ clickedModal, productId }) {
  const [imageUrl, setImageUrl] = useState(null);
  const imgRef = useRef();

  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const onSubmit = e => {
    e.preventDefault();

    const modal = document.getElementById('modal');
    const formData = new FormData(modal);
    formData.append('productId', productId);
    // for (let key of formData.keys()) {
    //   console.log(key, ':', formData.get(key));
    // }
    fetch('https://b003-211-106-114-186.jp.ngrok.io/review/', {
      method: 'POST',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE2NjM4NDU3ODF9.2aFMvfGNMWWlBhf0MNQhiUCN5cHp3OceDIvZqf2JylA',
        enctype: 'multipart/form-data',
      },
      body: formData,
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
      })
      .then(data => {
        if (data.message === 'Create Review Success') {
          alert('성공');
        } else {
          alert('실패');
        }
      });
  };

  return (
    <>
      <div className="overlay" onClick={clickedModal} />
      <form id="modal" onSubmit={onSubmit}>
        <div className="modalHeader">
          <h1 className="modalTitle">구매평 작성</h1>
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
              ref={imgRef}
              onChange={onChangeImage}
            />
          </label>
          <textarea
            name="comment"
            id="writeReviews"
            placeholder="소중한 후기를 남겨주세요"
          />
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

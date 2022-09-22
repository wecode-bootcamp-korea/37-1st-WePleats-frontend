import React from 'react';
import './Modal.scss';

function Modal(props) {
  return (
    <>
      <div className="overlay" />
      <section className="modal">
        <div className="header">
          <h1 className="title">구매평 작성</h1>
          <button className="button">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <div className="content">
          <input className="input" type="file" />
          <button className="button">
            <i className="fa-solid fa-camera-retro" />
            <h3 className="name">사진 / 동영상 첨부하기</h3>
          </button>
        </div>
      </section>
    </>
  );
}

export default Modal;

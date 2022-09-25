import React from 'react';
import './OptionModal.scss';

function OptionModal(props) {
  const product = props;
  return (
    <>
      <div className="blackBackground" />
      <div className="backgroundBox">
        <div className="modalBox">
          <div className="modalTopBox">
            <div className="modalTitle">옵션 변경</div>
            <div className="quitButton">
              <img src="/images/close" alt="close" />
            </div>
          </div>
          <div className="modalMiddleBox">
            <div className="modalProductBox" />
            <div className="changeQuantityBox">
              <div>수량</div>
              <div>- +</div>
            </div>
            <div className="modalCountBox">
              <div>총수량 3개</div>
              <div>{product.price}</div>
            </div>
          </div>
          <div className="modalBottomBox">
            <div className="modalButtonBox">
              <div className="cancelButton" />
              <div className="changeButton" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OptionModal;

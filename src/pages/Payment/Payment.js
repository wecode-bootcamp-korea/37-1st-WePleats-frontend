import React from 'react';
import './Payment.scss';

function Payment() {
  return (
    <div className="payment">
      <div className="paymentBox">
        <div className="header">결제하기</div>
        <div className="contents">
          <div className="payLeft">
            <div className="orderedItem box">
              <p className="title">주문 상품 정보</p>
              <ul className="itemListBox">
                <li className="item">
                  <div
                    className="img"
                    style={{
                      background:
                        'url(https://velog.velcdn.com/images/rayong/post/30a5de22-fd54-46bc-b540-e906c2c4bf48/image.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="desc">
                    <p className="name">애플 모니터</p>
                    <p className="count">1개</p>
                    <p className="price">59,000원</p>
                  </div>
                </li>
                <li className="item">
                  <div
                    className="img"
                    style={{
                      background:
                        'url(https://velog.velcdn.com/images/rayong/post/e317c749-d647-4ec0-bf05-53e70a02432f/image.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="desc">
                    <p className="name">울트라소닉 모니터</p>
                    <p className="count">1개</p>
                    <p className="price">39,000원</p>
                  </div>
                </li>
              </ul>
              <div className="shipFee">
                배송비 <strong>무료</strong>
              </div>
            </div>
            <div className="orderInfo box">
              <p className="title">주문자 정보</p>
              <p className="text">
                <p className="before">
                  ! 주문하기 전 : 마이페이지 내 다운로드 가능한 쿠폰이
                  있는지확인해 주세요
                </p>
                <p className="notongjang">
                  ! 무통장입금시 : 주문자와 입금 예금주의 이름이같지 않을경우,
                  확인이 지연될 수 있으니, 다르시다면, 입금 후 1:1문의로 문의
                  남겨주시면 감사하겠습니다. 또한, 주문 후 72시간내로 입금이
                  되지 않으면, 자동 주문 취소 됩니다.
                </p>
              </p>
              <div className="userInfoBox">
                <div className="userInfo">
                  <p className="name">라용</p>
                  <p className="phoneNum">010-8411-7442</p>
                  <p className="email">skdyds@naver.com</p>
                </div>
                <div className="modifyBtn">수정</div>
              </div>
            </div>
            <div className="shippingInfo box">
              <p className="title">배송 정보</p>
              <form className="shipForm">
                <label className="userSameCheck label">
                  <input
                    className="checkBox"
                    name="same"
                    type="checkbox"
                    value="check"
                  />
                  <span className="text">주문자 정보와 동일</span>
                </label>
                <div className="inputGrid">
                  <input
                    className="name input"
                    name="name"
                    type="text"
                    placeholder="수령인"
                    autoComplete="username"
                  />
                  <input
                    className="num input"
                    name="num"
                    type="text"
                    placeholder="연락처"
                    autoComplete="username"
                  />
                  <input
                    className="postNum input"
                    name="postNum"
                    type="text"
                    placeholder="우편번호"
                    autoComplete="username"
                  />
                  <div className="findAddressBtn">주소 찾기</div>
                  <input
                    className="address input"
                    name="address"
                    type="text"
                    placeholder="주소"
                    autoComplete="username"
                  />
                  <input
                    className="detailAddress input"
                    name="detailAddress"
                    type="text"
                    placeholder="상세주소"
                    autoComplete="username"
                  />
                </div>
                <label className="addList label">
                  <input
                    className="addList"
                    name="addList"
                    type="checkbox"
                    value="add"
                  />
                  <span className="text">배송지 목록에 추가</span>
                </label>
                <div className="shipMemo">
                  <p className="memoTitle">배송 메모</p>
                  <div className="memoBox">
                    <select className="select" name="year">
                      <option value="m1">배송 메모를 선택해 주세요</option>
                      <option value="m2">배송 전에 미리 연락 바랍니다</option>
                      <option value="m3">부재시 경비실에 맡겨주세요</option>
                      <option value="m4">
                        부재시 전화나 문자를 남겨주세요
                      </option>
                      <option value="m5">직접 입력</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="couponPoint box">
              <p className="title">쿠폰/포인트</p>
              <p className="name">쿠폰</p>
              <div className="couponBox">
                <input
                  className="input"
                  placeholder="보유쿠폰 0장"
                  name="couponCount"
                  type="text"
                />
                <div className="button">쿠폰적용</div>
              </div>
              <p className="name">쿠폰번호</p>
              <div className="couponBox">
                <input
                  className="input"
                  placeholder="쿠폰 번호 입력"
                  name="couponNum"
                  type="text"
                />
                <div className="button">코드확인</div>
              </div>
              <p className="name">포인트</p>
              <div className="couponBox">
                <input
                  className="input"
                  placeholder="0"
                  name="couponPoint"
                  type="text"
                />
                <div className="button">전액사용</div>
              </div>
              <p className="userPoint subText">보유 포인트 5,000</p>
              <p className="pointUseInfo subText">
                10,000원 이상 구매시 사용 가능
              </p>
            </div>
          </div>
          <div className="payRight">
            <div className="orderSummary box">
              <p className="title">주문 요약</p>
              <div className="outerBox">
                <div className="orderProductPrice">
                  <p className="name">상품가격</p>
                  <p className="price">59,000</p>
                </div>
                <div className="orderShipPrice">
                  <p className="name">배송비</p>
                  <p className="price">무료</p>
                </div>
              </div>
              <div className="outerBox">
                <div className="orderTotalPrice">
                  <p className="name">총 주문금액</p>
                  <p className="price">59,000원</p>
                </div>
              </div>
              <p className="savePoint">1,770 포인트 적립 예정</p>
            </div>
            <div className="paymentMethod box">결제 수단</div>
            <div className="paymentBtn box">결제 하기</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

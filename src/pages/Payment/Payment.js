import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderedItem from './OrderedItem';
import './Payment.scss';

function Payment() {
  const [orderedItem, setOrderedItem] = useState({});
  const [isCoupon, setIsCoupon] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://3.35.54.156:3000/order', {
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(res => setOrderedItem(res.order));
  }, []);

  const orderFinal = () => {
    fetch('http://3.35.54.156:3000/order', {
      method: 'POST',
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        price: 2000,
        address: 'askdkn',
        point: 0,
        couponId: 0,
      }),
    })
      .then(response => response.json())
      .then(json => {
        if (json.message === 'order Success') {
          alert('리뷰 남겨');
          navigate('/');
        } else {
          return;
        }
      });
  };

  const couponMoney = orderedItem.coupon && orderedItem.coupon[0].coupon_money;

  let totalPrice = 0;
  orderedItem.product !== undefined &&
    orderedItem.product.forEach(item => {
      totalPrice += item.price;
    });

  let savePoint = totalPrice * 0.1;

  const useCoupon = () => {
    setIsCoupon(!isCoupon);
  };

  const rightHeight = isCoupon ? { height: '535px' } : { height: '508px' };
  return (
    <div className="payment">
      <div className="paymentBox">
        <div className="header">결제하기</div>
        <div className="contents">
          <div className="payLeft">
            <div className="orderedItem box">
              <p className="title">주문 상품 정보</p>
              <ul className="itemListBox">
                {/* <OrderedItem item={orderedItem.product} /> */}
                {orderedItem.product !== undefined &&
                  orderedItem.product.map(item => {
                    return <OrderedItem key={item.id} item={item} />;
                  })}
              </ul>
              <div className="shipFee">
                배송비 <strong>무료</strong>
              </div>
            </div>
            <div className="orderInfo box">
              <p className="title">주문자 정보</p>
              <div className="text">
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
              </div>
              <div className="userInfoBox">
                <div className="userInfo">
                  <p className="name">{orderedItem.name}</p>
                  <p className="phoneNum">{orderedItem.phone_number}</p>
                  <p className="email">skdyds@naver.com</p>
                </div>
                <div
                  className="modifyBtn"
                  onClick={() => {
                    alert('수정하지 마세요');
                  }}
                >
                  수정
                </div>
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
                  <div
                    className="findAddressBtn"
                    onClick={() => {
                      alert('주소 찾지 마세요.');
                    }}
                  >
                    주소 찾기
                  </div>
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
                <div
                  className="button"
                  onClick={() => {
                    alert('쿠폰은 다음 기회에 쓰세요.');
                  }}
                >
                  쿠폰적용
                </div>
              </div>
              <p className="name">쿠폰번호</p>
              <div className="couponBox">
                <input
                  className="input"
                  placeholder="쿠폰 번호 입력"
                  name="couponNum"
                  type="text"
                />
                <div
                  className="button"
                  onClick={() => {
                    alert('당신의 쿠폰 번호는 궁금하지 않습니다.');
                  }}
                >
                  코드확인
                </div>
              </div>
              <p className="name">포인트</p>
              <div className="couponBox">
                <input
                  className="input"
                  placeholder={!isCoupon ? couponMoney : 0}
                  name="couponPoint"
                  type="text"
                />
                <div className="button" onClick={useCoupon}>
                  전액사용
                </div>
              </div>
              <p className="userPoint subText">
                보유 포인트 {!isCoupon ? couponMoney : 0}
              </p>
              <p className="pointUseInfo subText">
                10,000원 이상 구매시 사용 가능
              </p>
            </div>
          </div>
          <div className="payRight" style={rightHeight}>
            <div className="orderSummary box">
              <p className="title">주문 요약</p>
              <div className="outerBox">
                {orderedItem.product !== undefined &&
                  orderedItem.product.map((item, index) => {
                    return (
                      <div key={item.id} className="orderProductPrice boxFlex">
                        <p className="name">{index === 0 && '상품 가격'}</p>
                        <p className="price">{item.price.toLocaleString()}</p>
                      </div>
                    );
                  })}
                {isCoupon && (
                  <div className="orderPointPrice boxFlex">
                    <p className="name">포인트</p>
                    <p className="price">- {couponMoney}</p>
                  </div>
                )}
                <div className="orderShipPrice boxFlex">
                  <p className="name">배송비</p>
                  <p className="price">무료</p>
                </div>
              </div>
              <div className="outerBox">
                <div className="orderTotalPrice boxFlex">
                  <p className="name">총 주문금액</p>
                  <p className="price">
                    {!isCoupon
                      ? totalPrice.toLocaleString()
                      : (totalPrice - couponMoney).toLocaleString()}
                    원
                  </p>
                </div>
              </div>
              <p className="savePoint">
                <span className="string">{savePoint.toLocaleString()}</span>{' '}
                포인트 적립 예정
              </p>
            </div>
            <div className="paymentMethod box">
              <p className="title">결제 수단</p>
              <div className="methodBox">
                <div className="leftBox flexBox">
                  <label className="payA label">
                    <input
                      className="radio"
                      name="pay"
                      type="radio"
                      value="은행"
                    />
                    <span className="text">신한은행</span>
                  </label>
                  <label className="payB label">
                    <input
                      className="radio"
                      name="pay"
                      type="radio"
                      value="무통장"
                    />
                    <span className="text">무통장입금</span>
                  </label>
                  <label className="payC label">
                    <input
                      className="radio"
                      name="pay"
                      type="radio"
                      value="페이코"
                    />
                    <span className="text">PAYCO</span>
                  </label>
                </div>
                <div className="rightBox flexBox">
                  <label className="payD label">
                    <input
                      className="radio"
                      name="pay"
                      type="radio"
                      value="가상계좌"
                    />
                    <span className="text">가상계좌</span>
                  </label>
                  <label className="payE label">
                    <input
                      className="radio"
                      name="pay"
                      type="radio"
                      value="카카오페이"
                    />
                    <span className="text">카카오페이</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="paymentBtnBox">
              <div className="allAgree">
                <label className="agreeCheck">
                  <input
                    className="checkBox"
                    name="agree"
                    type="checkBox"
                    value="agree"
                  />
                  <span className="text">구매조건 확인 및 결제진행에 동의</span>
                </label>
              </div>
              <div className="payBtn" onClick={orderFinal}>
                결제하기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;

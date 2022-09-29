import React from 'react';

function CartEmpty() {
  return (
    <div className="cartContentsBoxEmpty">
      <div className="titleBox">
        <h1 className="title">장바구니</h1>
        <div className="count">0</div>
      </div>
      <div className="cartProductBox">
        <div className="cartProductMenu">
          <div className="information">상품정보</div>
          <div className="number">수량</div>
          <div className="price">주문금액</div>
          <div className="deliver">배송 정보</div>
        </div>
        <div className="cartProductContents">
          <img src="/images/cart.png" alt="cart" />
          <div className="textEmpty">장바구니가 비어있습니다.</div>
        </div>
      </div>
      <div className="keepShopping">
        <a href="pleatsmama.com/shop_cart">계속 쇼핑하기</a>
      </div>
      <div className="wishListBox">
        <div className="wishListTitle">
          <p>위시리스트</p>
          <div className="seeMore">더보기</div>
        </div>
        <div className="wishListContents">
          <p>위시리스트가 없습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default CartEmpty;

import React from 'react';

function OrderedItem(props) {
  const { name, price, quantity, thumbnail_url } = props.item;
  return (
    <li className="item">
      <div
        className="img"
        style={{
          background: `url(${thumbnail_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="desc">
        <p className="name">{name}</p>
        <p className="count">{quantity}개</p>
        <p className="price">{price}원</p>
      </div>
    </li>
  );
}

export default OrderedItem;

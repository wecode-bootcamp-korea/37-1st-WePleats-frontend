import React from 'react';

function OrderedItem({ item }) {
  const { id, name, price, quantity, thumbnail_url } = item;

  return (
    <li className="item" key={id}>
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

import React from 'react';
import './Filter.scss';

function Filter({ info }) {
  return (
    <li className="colorItem" id={info.id} key={info.id}>
      <div className="color" style={{ background: `${info.color}` }} />
      <p className="name">{info.name}</p>
    </li>
  );
}

export default Filter;

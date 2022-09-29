import React from 'react';
import './Filter.scss';

function Filter({ info, sortColor }) {
  return (
    <li
      className="colorItem"
      id={info.id}
      key={info.id}
      onClick={() => sortColor(info.id)}
    >
      <div
        className="color"
        id={info.id}
        style={{ background: `${info.color}` }}
      />
      <p className="name">{info.name}</p>
    </li>
  );
}

export default Filter;

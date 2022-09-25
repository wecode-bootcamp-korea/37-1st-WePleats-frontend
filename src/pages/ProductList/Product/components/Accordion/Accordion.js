import React, { useState } from 'react';
import './Accordion.scss';

function Accordian({ title, text, productSize }) {
  const [isArrow, setIsArrow] = useState(false);

  const changeArrow = e => {
    setIsArrow(current => !current);
  };

  return (
    <li className="list">
      <div className="titleBox">
        <h3 className="title">{title}</h3>
        <button className="accordionBtn" onClick={changeArrow}>
          <i
            className={
              isArrow ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'
            }
          />
        </button>
      </div>
      <div className={isArrow ? 'textOpen' : 'textDown'}>
        {text ? text : productSize}
      </div>
    </li>
  );
}

export default Accordian;

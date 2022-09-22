import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="navBox">
      <div className="nav">
        <ul className="menu">
          {MENU_DATA.map(item => {
            return (
              <li className={item.name} key={item.id}>
                {item.menu}
              </li>
            );
          })}
        </ul>
        <ul className="userInfo">
          <li className="li name">장문정</li>
          <li className="li line" />
          <li className="li myPage">
            <i className="fa-solid fa-user" />
          </li>
          <li className="li line" />
          <li className="li cart">
            <i className="fa fa-shopping-bag" />
            <div className="count">3</div>
          </li>
          <li className="li line" />
          <li className="li search">
            <i className="fa-solid fa-magnifying-glass" />
          </li>
        </ul>
      </div>
      <div className="navDropDown">
        <ul className="dropDown">
          <li className="li best">Best</li>
          <li className="li new">New</li>
          <li className="li Monitor">
            <ul className="submenu">
              <li className="sub">일반</li>
              <li className="sub">고해상도</li>
              <li className="sub">게이밍</li>
              <li className="sub">터치</li>
            </ul>
          </li>
          <li className="li Keyboard">
            <ul className="submenu">
              <li className="sub">유선</li>
              <li className="sub">무선</li>
              <li className="sub">블루투스</li>
              <li className="sub">기계식</li>
            </ul>
          </li>
          <li className="li Mouse">
            <ul className="submenu">
              <li className="sub">유션</li>
              <li className="sub">무선</li>
              <li className="sub">블루투스</li>
              <li className="sub">버티컬</li>
            </ul>
          </li>
          <li className="li etc">스티커</li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

const MENU_DATA = [
  { id: 1, menu: 'WePleats', name: 'li logo' },
  { id: 2, menu: 'Best', name: 'li best' },
  { id: 3, menu: 'New', name: 'li new' },
  { id: 4, menu: 'Monitor', name: 'li monitor' },
  { id: 5, menu: 'Keyboard', name: 'li keyboard' },
  { id: 6, menu: 'Mouse', name: 'li mouse' },
  { id: 7, menu: 'Etc', name: 'li etc' },
];

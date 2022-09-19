import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="navBox">
      <div className="nav">
        <div className="menu">
          <div className="logo">WePleats</div>
          <div className="best">Best</div>
          <div className="new">New</div>
          <div className="electronic">Electronic</div>
          <div className="kitchen">Kitchen</div>
          <div className="etc">Etc</div>
        </div>
        <div className="userInfo">
          <div className="name">장문정</div>
          <div className="line" />
          <div className="myPage">
            <i className="fa-solid fa-user" />
          </div>
          <div className="line" />
          <div className="cart">
            <i className="fa fa-shopping-bag" />
            <div className="count">3</div>
          </div>
          <div className="line" />
          <div className="search">
            <i className="fa-solid fa-magnifying-glass" />
          </div>
        </div>
      </div>
      {/* <div className="navDropDown"></div> */}
    </nav>
  );
}

export default Nav;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const [cartCount, setCartCount] = useState(null);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetch('data/nav.json', {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartCount(data.cartCount);
        setUserId(data.userId);
      });
  }, []);

  return (
    <nav className="navBox">
      <div className="nav">
        <ul className="menu">
          <Link to="/">
            <li className="li logo">WePleats</li>
          </Link>
          <Link to="/category/best">
            <li className="li best">Best</li>
          </Link>
          <Link to="/category/new">
            <li className="li new">New</li>
          </Link>
          <Link to="/category?category=main&id=1">
            <li className="li monitor">Monitor</li>
          </Link>
          <Link to="/category?category=main&id=2">
            <li className="li keyboard">Keyboard</li>
          </Link>
          <Link to="/category?category=main&id=3">
            <li className="li mouse">Mouse</li>
          </Link>
          <Link to="/category?category=main&id=4">
            <li className="li etc">Etc</li>
          </Link>
        </ul>
        <ul className="userInfo">
          <Link to={userId ? null : '/signup'}>
            <li className="li name">{userId ? userId : '+5000P'}</li>
          </Link>

          <li className="li line" />
          <li className="li myPage">
            <i className="fa-solid fa-user" />
          </li>
          <li className="li line" />
          <Link to="/cart">
            <li className="li cart">
              <i className="fa fa-shopping-bag" />
              {cartCount && <div className="count">{cartCount}</div>}
            </li>
          </Link>
          <li className="li line" />
          <li className="li search">
            <i className="fa-solid fa-magnifying-glass" />
          </li>
        </ul>
      </div>
      <div className="navDropDown">
        <ul className="dropDown">
          <Link to="/category/best">
            <li className="li best">Best</li>
          </Link>
          <Link to="/category/new">
            <li className="li new">New</li>
          </Link>

          <li className="li Monitor">
            <ul className="submenu">
              <Link to="/category?category=sub&id=1">
                <li className="sub">일반</li>
              </Link>
              <Link to="/category?category=sub&id=2">
                <li className="sub">고해상도</li>
              </Link>
              <Link to="/category?category=sub&id=3">
                <li className="sub">게이밍</li>
              </Link>
              <Link to="/category?category=sub&id=4">
                <li className="sub">터치</li>
              </Link>
            </ul>
          </li>
          <li className="li Keyboard">
            <ul className="submenu">
              <Link to="/category?category=sub&id=5">
                <li className="sub">유선</li>
              </Link>
              <Link to="/category?category=sub&id=6">
                <li className="sub">무선</li>
              </Link>
              <Link to="/category?category=sub&id=7">
                <li className="sub">블루투스</li>
              </Link>
              <Link to="/category?category=sub&id=8">
                <li className="sub">기계식</li>
              </Link>
            </ul>
          </li>
          <li className="li Mouse">
            <ul className="submenu">
              <Link to="/category?category=sub&id=8">
                <li className="sub">유선</li>
              </Link>
              <Link to="/category?category=sub&id=9">
                <li className="sub">무선</li>
              </Link>
              <Link to="/category?category=sub&id=10">
                <li className="sub">블루투스</li>
              </Link>
              <Link to="/category?category=sub&id=11">
                <li className="sub">버티컬</li>
              </Link>
            </ul>
          </li>
          <Link to="/category?category=sub&id=12">
            <li className="li etc">스티커</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

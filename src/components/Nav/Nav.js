import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

function Nav() {
  const [cartCount, setCartCount] = useState(null);
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://3.35.54.156:3000/users', {
      headers: {
        authorization: localStorage.getItem('TOKEN'),
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setCartCount(data.nav.count);
        setUserId(data.nav.name);
      });
  }, []);

  const loginHandle = () => {
    if (localStorage.getItem('TOKEN')) return;
    navigate('/login');
  };

  const logout = () => {
    localStorage.clear();
    setUserId(null);
    setCartCount(null);
    navigate('/');
  };

  return (
    <nav className="navBox">
      <div className="nav">
        <ul className="menu">
          {MENU_LIST.map(item => {
            return (
              <li key={item.id} className={item.className}>
                <Link to={item.url}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
        <ul className="userInfo">
          <li className="li name">
            <Link to={userId ? null : '/signup'}>
              {userId ? userId : '+5000P'}
            </Link>
          </li>
          <li className="li line" />
          <li className="li myPage">
            <i className="fa-solid fa-user" onClick={loginHandle} />
          </li>
          <li className="li line" />
          <li className="li cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag" />
              {cartCount && <div className="count">{cartCount}</div>}
            </Link>
          </li>
          <li className="li line" />
          <li className="li search">
            <i class="fa-solid fa-right-from-bracket" onClick={logout} />
          </li>
        </ul>
      </div>
      <div className="navDropDown">
        <ul className="dropDown">
          <li className="li best">
            <Link to="/category/best">Best</Link>
          </li>
          <li className="li new">
            <Link to="/category/new">New</Link>
          </li>
          <li className="li Monitor">
            <ul className="submenu">
              {MONITOR_LIST.map(item => {
                return (
                  <li key={item.id} className="sub">
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="li Keyboard">
            <ul className="submenu">
              {KEYBOARD_LIST.map(item => {
                return (
                  <li key={item.id} className="sub">
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="li Mouse">
            <ul className="submenu">
              {MOUSE_LIST.map(item => {
                return (
                  <li key={item.id} className="sub">
                    <Link to={item.url}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="li etc">
            <Link to="/category?category=sub&id=13">?????????</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;

const MENU_LIST = [
  { id: 1, name: 'WePleats', className: 'li logo', url: '/' },
  { id: 2, name: 'Best', className: 'li best', url: '/category/best' },
  { id: 3, name: 'New', className: 'li new', url: '/category/new' },
  {
    id: 4,
    name: 'Monitor',
    className: 'li monitor',
    url: '/category?category=main&id=1',
  },
  {
    id: 5,
    name: 'Keyboard',
    className: 'li keyboard',
    url: '/category?category=main&id=2',
  },
  {
    id: 6,
    name: 'Mouse',
    className: 'li mouse',
    url: '/category?category=main&id=3',
  },
  {
    id: 7,
    name: 'etc',
    className: 'li etc',
    url: '/category?category=main&id=4',
  },
];

const MONITOR_LIST = [
  {
    id: 1,
    name: '??????',
    url: '/category?category=sub&id=1',
  },
  {
    id: 2,
    name: '????????????',
    url: '/category?category=sub&id=2',
  },
  {
    id: 3,
    name: '?????????',
    url: '/category?category=sub&id=3',
  },
  {
    id: 4,
    name: '??????',
    url: '/category?category=sub&id=4',
  },
];

const KEYBOARD_LIST = [
  {
    id: 1,
    name: '??????',
    url: '/category?category=sub&id=5',
  },
  {
    id: 2,
    name: '??????',
    url: '/category?category=sub&id=6',
  },
  {
    id: 3,
    name: '????????????',
    url: '/category?category=sub&id=7',
  },
  {
    id: 4,
    name: '?????????',
    url: '/category?category=sub&id=8',
  },
];

const MOUSE_LIST = [
  {
    id: 1,
    name: '??????',
    url: '/category?category=sub&id=9',
  },
  {
    id: 2,
    name: '??????',
    url: '/category?category=sub&id=10',
  },
  {
    id: 3,
    name: '????????????',
    url: '/category?category=sub&id=11',
  },
  {
    id: 4,
    name: '?????????',
    url: '/category?category=sub&id=12',
  },
];

import React from 'react';
import { Link } from 'react-router-dom';
import './Navigate.scss';

function Navigate({ product }) {
  return (
    <nav className="nav">
      <ul className="subMenu">
        <li className="li home">
          <Link to="/">Home</Link>
        </li>
        <li className="li">
          <i className="fa-thin fa-greater-than" />
        </li>
        <Link to={`/category?category=main&id=${product.main_category_num}`}>
          <li className="li productLists">{product.main_category}</li>
        </Link>
        <li className="li">
          <i className="fa-thin fa-greater-than" />
        </li>
        <Link to={`/category?category=sub&id=${product.sub_category_num}`}>
          <li className="li product">{product.sub_category}</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigate;

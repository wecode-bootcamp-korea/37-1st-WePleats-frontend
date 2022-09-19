import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import SignUp from './pages/SignUp/SignUp';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/ProductList/Product/Product';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav /> // nav 컴포넌트
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product" element={<Product />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer /> // footer 컴포넌트
    </BrowserRouter>
  );
};
export default Router;

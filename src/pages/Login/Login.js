import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const [userInput, setUserInput] = useState({
    id: '',
    pw: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const isValidId = userInput.id.includes('@');
  const isValidPw = userInput.pw.length >= 5;
  const isAllValid = isValidId && isValidPw;

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/');
  };

  return (
    <div className="login">
      <div className="loginBox">
        <p className="loginTitle">welcome, wepleats</p>
        <form className="inputBox">
          <input
            onChange={handleInput}
            className="userInput"
            name="id"
            type="text"
            placeholder="이메일"
            autoComplete="username"
          />
          <input
            onChange={handleInput}
            className="userInput"
            name="pw"
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
          />
          <div className="checkBox">
            <input type="checkbox" id="ch1" />
            <label className="checkLogin" htmlFor="ch1">
              로그인 상태 유지
            </label>
          </div>
          <button
            onClick={goToMain}
            disabled={!isAllValid}
            className="loginBtn"
          >
            로그인
          </button>
        </form>
        <div className="linkBox">
          <p className="signupLink">회원가입</p>
          <p className="findLink">아아디 비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

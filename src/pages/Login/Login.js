import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="loginBox">
        <p className="loginTitle">welcome, wepleats</p>
        <form className="inputBox">
          <input
            className="userInput"
            name="id"
            type="text"
            placeholder="이메일"
            autoComplete="username"
          />
          <input
            className="userInput"
            name="pw"
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
          />
          <div className="checkBox">
            <input type="checkbox" id="ch1" />
            <label className="checkLogin" for="ch1">
              로그인 상태 유지
            </label>
          </div>
          <button className="loginBtn">로그인</button>
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

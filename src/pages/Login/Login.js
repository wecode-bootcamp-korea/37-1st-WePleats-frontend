import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    email: '',
    pw: '',
  });
  const { email, pw } = userInput;

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const isValid = {
    email: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(email),
    pw: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      pw
    ),
  };

  const isAllValid = isValid.email && isValid.pw;

  // 로그인 통신 성공, wecode@wecode.com / Wecode!1
  const login = e => {
    e.preventDefault();
    fetch('http://172.20.10.10:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: pw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('에러 발생!');
      })
      .catch(error => alert(error))
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('TOKEN', data.accessToken);
          alert('로그인 성공');
          navigate('/main');
        } else {
          alert('로그인 실패');
        }
      });
  };
  return (
    <div className="login">
      <div className="loginBox">
        <p className="loginTitle">welcome, wepleats</p>
        <form className="inputBox">
          <input
            onChange={handleInput}
            className="userInput"
            name="email"
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
          {!isValid.email && (
            <p
              className="inputCheck"
              style={{ display: email.length > 0 ? 'block' : 'none' }}
            >
              * 이메일 양식을 맞춰주세요!
            </p>
          )}
          {!isValid.pw && (
            <p
              className="inputCheck"
              style={{ display: pw.length > 0 ? 'block' : 'none' }}
            >
              * 비밀번호는 대소문자, 숫자, 특수문자 포함 8자리 이상 적어주세요!
            </p>
          )}
          <div className="checkBox">
            <input type="checkbox" id="ch1" />
            <label className="checkLogin" htmlFor="ch1">
              로그인 상태 유지
            </label>
          </div>
          <button onClick={login} disabled={!isAllValid} className="loginBtn">
            로그인
          </button>
        </form>
        <div className="linkBox">
          <Link to="/singup">
            <p className="signupLink">회원가입</p>
          </Link>
          <p className="findLink">아아디 비밀번호 찾기</p>
        </div>
      </div>
    </div>
  );
}

export default Login;

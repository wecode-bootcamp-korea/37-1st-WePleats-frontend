import React, { useState } from 'react';
import './SignUp.scss';

function SignUp() {
  const [userInput, setUserInput] = useState({
    email: '',
    pw: '',
    pwCheck: '',
  });

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const isPwSame = userInput.pw === userInput.pwCheck ? true : false;

  // const signupForm = document.getElementById('signupForm');

  const checkSignUp = e => {
    e.preventDefault();
    fetch('https://8075-211-106-114-186.jp.ngrok.io/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userInput.email,
        password: userInput.pw,
        name: 'test6',
        birthday: '1994-10-11',
        phone_number: '010-3330-3333',
        gender: 'man',
      }),
    });
    // .then(response => {
    //   if (response.ok === true) {
    //     return response.json();
    //   }
    //   throw new Error('에러 발생!');
    // })
    // .catch(error => alert(error))
    // .then(data => {
    //   if (data.token) {
    //     // localStorage.setItem('TOKEN', data.token);
    //     alert('로그인 성공');
    //     navigate('/rayong/Main');
    //   } else {
    //     alert('로그인 실패');
    //   }
    // });
  };

  return (
    <div className="signUp">
      <form className="signUpBox">
        <div className="profileBox">
          <div className="imgBox">
            <div className="imgUploadBtn">
              <i className="fa-sharp fa-solid fa-camera" />
            </div>
          </div>
        </div>
        {/* 이메일 비밀번호 입력 */}
        <input
          onChange={handleInput}
          className="userInputEmail input"
          name="email"
          type="text"
          placeholder="이메일"
          autoComplete="username"
        />
        <input
          onChange={handleInput}
          className="userInputPw input"
          name="pw"
          type="password"
          placeholder="비밀번호"
          autoComplete="current-password"
        />
        <input
          onChange={handleInput}
          className="userInputPwCheck input"
          name="pwCheck"
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="current-password"
        />
        {!isPwSame && (
          <p className="notSameMsg">비밀번호가 일치하지 않습니다.</p>
        )}

        {/* 이름 입력 */}
        <p className="userName title mustInput">이름</p>
        <input
          className="userInputName input"
          name="name"
          type="text"
          placeholder="이름을(를) 입력하세요"
          autoComplete="username"
        />
        {/* 성별 입력 */}
        <p className="userGender title mustInput">성별</p>
        <label className="userMale label">
          <input className="radio" name="gender" type="radio" value="man" />
          <span className="text">남자</span>
        </label>
        <label className="userFemale label">
          <input className="radio" name="gender" type="radio" value="woman" />
          <span className="text">여자</span>
        </label>
        {/* 휴대폰 입력 */}
        <p className="userPhoneNum title mustInput">휴대폰</p>
        <input
          className="userInputNumber input"
          name="phoneNum"
          type="text"
          placeholder="000-0000-0000 형식으로 입력하세요"
          autoComplete="username"
        />
        {/* 생년월일 입력 */}
        <div className="userBirth">
          <p className="title mustInput">생년월일</p>
          <div className="selectBox">
            <select className="select" name="year">
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
            </select>
            <select className="select" name="month">
              <option value="1">1월</option>
              <option value="2">2월</option>
              <option value="3">3월</option>
            </select>
            <select className="select" name="day">
              <option value="1">1일</option>
              <option value="2">2일</option>
              <option value="3">3일</option>
            </select>
          </div>
        </div>
        {/* 개인정보 유효기간 */}
        <div className="userDataSave">
          <p className="name title">개인정보 유효기간</p>
          <label className="one label">
            <input className="radio" name="time" type="radio" value="1" />
            <span className="text">1년</span>
          </label>
          <label className="two label">
            <input className="radio" name="time" type="radio" value="2" />
            <span className="text">2년</span>
          </label>
          <label className="five label">
            <input className="radio" name="time" type="radio" value="3" />
            <span className="text">5년</span>
          </label>
          <label className="out label">
            <input className="radio" name="time" type="radio" value="exit" />
            <span className="text">회원 탈퇴 시</span>
          </label>
        </div>
        <div className="signupBtn" onClick={checkSignUp}>
          가입하기
        </div>
      </form>
    </div>
  );
}

export default SignUp;

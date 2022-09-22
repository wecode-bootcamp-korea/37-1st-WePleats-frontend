import React from 'react';
import './SignUp.scss';

function SignUp() {
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
          className="userInputEmail input"
          name="id"
          type="text"
          placeholder="이메일"
          autoComplete="username"
        />
        <input
          className="userInputPw input"
          name="pw"
          type="password"
          placeholder="비밀번호"
          autoComplete="current-password"
        />
        <input
          className="userInputPwCheck input"
          name="pw"
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="current-password"
        />
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
          <input className="radio" name="gender" type="radio" value="male" />
          <span className="text">남자</span>
        </label>
        <label className="userFemale label">
          <input className="radio" name="gender" type="radio" value="female" />
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
              <option value="1990">1990</option>
              <option value="1991">1991</option>
              <option value="1992">1992</option>
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
        <div className="signupBtn">가입하기</div>
      </form>
    </div>
  );
}

export default SignUp;

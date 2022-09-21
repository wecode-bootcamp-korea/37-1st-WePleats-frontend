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
        <input
          className="userInputEmail"
          name="id"
          type="text"
          placeholder="이메일"
          autoComplete="username"
        />
        <input
          className="userInputPw"
          name="pw"
          type="password"
          placeholder="비밀번호"
          autoComplete="current-password"
        />
        <input
          className="userInputPwCheck"
          name="pw"
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="current-password"
        />
        <p className="userName">이름</p>
        <input
          className="userInputName"
          name="name"
          type="text"
          placeholder="이름을(를) 입력하세요"
          autoComplete="username"
        />
        <p className="userGender">성별</p>
        <label className="userMale">
          <input className="radio" name="gender" type="radio" />
          <span className="text">남자</span>
        </label>
        <label className="userFemale">
          <input className="radio" name="gender" type="radio" />
          <span className="text">여자</span>
        </label>
        <p className="userPhoneNum">휴대폰</p>
        <input
          className="userInputNumber"
          name="phoneNum"
          type="text"
          placeholder="휴대폰"
          autoComplete="username"
        />
        <p className="userBirth">생년월일</p>
        <p className="userDataSave">개인정보 유효기간</p>
      </form>
    </div>
  );
}

export default SignUp;

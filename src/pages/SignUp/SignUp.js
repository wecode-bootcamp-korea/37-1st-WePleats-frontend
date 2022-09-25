import React, { useState } from 'react';
import './SignUp.scss';

function SignUp() {
  const [userInput, setUserInput] = useState({
    email: '',
    pw: '',
    pwCheck: '',
    name: '',
    gender: '',
    phoneNum: '',
    year: '',
    month: '',
    day: '',
    time: '',
  });

  const { email, pw, pwCheck, name, gender, phoneNum, year, month, day, time } =
    userInput;

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  // 이메일 유효성 검사
  const isEmail = email => {
    const emailRegex = /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/;
    return emailRegex.test(email);
  };
  const isEmailValid = isEmail(email);

  // 패스워드 유효성 검사
  const isPw = pw => {
    const pwRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return pwRegex.test(pw);
  };
  const isPwValid = isPw(pw);

  // 패스워드 재확인
  const isPwSame = pw === pwCheck;
  const pwDoubleCheck = !isPwSame ? 'pwDoubleCheck' : undefined;

  // 휴대폰 번호 유효성 검사
  const isPhoneNum = phoneNum => {
    const phoneNumRegex = /01[016789]-[^0][0-9]{2,3}-[0-9]{4,4}/;
    return phoneNumRegex.test(phoneNum);
  };
  const isPhoneNumValid = isPhoneNum(phoneNum);

  // 생년월일 입력여부 확인
  const isBirth = Boolean(year && month && day);

  // 개인정보 유효기간
  const isTimeValid = Boolean(time);

  // 전체 유효성 검사 후 버튼 활성화
  const isAllValid =
    isEmailValid &&
    isPwValid &&
    isPwSame &&
    isPhoneNumValid &&
    isBirth &&
    isTimeValid;

  const activeBtn = isAllValid ? 'undefined' : 'disabled';

  // 통신
  const checkSignUp = e => {
    e.preventDefault();
    fetch('https://8075-211-106-114-186.jp.ngrok.io/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: pw,
        name: name,
        birthday: `${year}-${month}-${day}`,
        phone_number: phoneNum,
        gender: gender,
        time: time,
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
          // className="userInputPwCheck input"
          className={`userInputPwCheck input ${pwDoubleCheck}`}
          name="pwCheck"
          type="password"
          placeholder="비밀번호 확인"
          autoComplete="current-password"
        />
        {!isEmailValid && (
          <p
            className="inputCheck"
            style={{ display: email.length > 0 ? 'block' : 'none' }}
          >
            * 이메일 양식을 맞춰주세요!
          </p>
        )}
        {!isPwValid && (
          <p
            className="inputCheck"
            style={{ display: pw.length > 0 ? 'block' : 'none' }}
          >
            * 비밀번호는 대소문자, 숫자, 특수문자 포함 8자리 이상 적어주세요!
          </p>
        )}
        {/* 이름 입력 */}
        <p className="userName title mustInput">이름</p>
        <input
          onChange={handleInput}
          className="userInputName input"
          name="name"
          type="text"
          placeholder="이름을(를) 입력하세요"
          autoComplete="username"
        />
        {/* 성별 입력 */}
        <p className="userGender title mustInput">성별</p>
        <label className="userMale label">
          <input
            onChange={handleInput}
            className="radio"
            name="gender"
            type="radio"
            value="man"
          />
          <span className="text">남자</span>
        </label>
        <label className="userFemale label">
          <input
            onChange={handleInput}
            className="radio"
            name="gender"
            type="radio"
            value="woman"
          />
          <span className="text">여자</span>
        </label>
        {/* 휴대폰 입력 */}
        <p className="userPhoneNum title mustInput">휴대폰</p>
        <input
          onChange={handleInput}
          className="userInputNumber input"
          name="phoneNum"
          type="text"
          placeholder="000-0000-0000 형식으로 입력하세요"
          autoComplete="username"
        />
        {!isPhoneNumValid && (
          <p
            className="inputCheck"
            style={{ display: phoneNum.length > 0 ? 'block' : 'none' }}
          >
            * 숫자 사이에 하이픈(-)을 넣어주세요.
          </p>
        )}
        {/* 생년월일 입력 */}
        <div className="userBirth">
          <p className="title mustInput">생년월일</p>
          <div className="selectBox">
            <select className="select" name="year" onChange={handleInput}>
              <option>1990</option>
              <option>1991</option>
              <option>1992</option>
            </select>
            <select className="select" name="month" onChange={handleInput}>
              {[
                '01',
                '02',
                '03',
                '04',
                '05',
                '06',
                '07',
                '08',
                '09',
                '10',
                '11',
                '12',
              ].map(m => {
                return <option key={m}>{m}</option>;
              })}
            </select>
            <select className="select" name="day" onChange={handleInput}>
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>
        </div>
        {/* 개인정보 유효기간 */}
        <div className="userDataSave">
          <p className="name title">개인정보 유효기간</p>
          <label className="one label">
            <input
              className="radio"
              name="time"
              type="radio"
              value="1"
              onChange={handleInput}
            />
            <span className="text">1년</span>
          </label>
          <label className="two label">
            <input
              className="radio"
              name="time"
              type="radio"
              value="2"
              onChange={handleInput}
            />
            <span className="text">2년</span>
          </label>
          <label className="five label">
            <input
              className="radio"
              name="time"
              type="radio"
              value="5"
              onChange={handleInput}
            />
            <span className="text">5년</span>
          </label>
          <label className="out label">
            <input
              className="radio"
              name="time"
              type="radio"
              value="out"
              onChange={handleInput}
            />
            <span className="text">회원 탈퇴 시</span>
          </label>
        </div>
        <div className={`signupBtn ${activeBtn}`} onClick={checkSignUp}>
          가입하기
        </div>
      </form>
    </div>
  );
}

export default SignUp;

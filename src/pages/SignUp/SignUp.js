import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { YEAR } from './YEAR';
import { MONTH } from './MONTH';
import { DAY } from './DAY';
import { LIMIT_TIME } from './LIMIT_TIME';
import './SignUp.scss';

function SignUp() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState(null);
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
    pwCheck: '',
    name: '',
    gender: '',
    phone_number: '',
    year: '',
    month: '',
    day: '',
    time: '',
  });

  const {
    email,
    password,
    pwCheck,
    name,
    gender,
    phone_number,
    year,
    month,
    day,
  } = userInput;

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const validator = {
    email: email => /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/.test(email),
    password: password =>
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
        password
      ),
    pwCheck: password => password === pwCheck,
    name: name => Boolean(name),
    gender: gender => Boolean(gender),
    phone_number: phone_number =>
      /01[016789]-[^0][0-9]{2,3}-[0-9]{4,4}/.test(phone_number),
    year: year => Boolean(year),
    month: month => Boolean(month),
    day: day => Boolean(day),
    time: time => Boolean(time),
  };

  const validateAll = () =>
    Object.entries(userInput).every(([key, value]) => {
      return validator[key](value);
    });

  const isAllValid = validateAll();
  const activeBtn = isAllValid ? 'undefined' : 'disabled';

  const imgRef = useRef();
  const onChangeImage = () => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
  };

  const checkSignUp = e => {
    e.preventDefault();

    fetch('http://172.20.10.10:3000/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        gender: gender,
        phone_number: phone_number,
        birthday: `${year}-${month}-${day}`,
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
        if (data.message === 'Signup Success!') {
          alert('회원가입 성공');
          navigate('/login');
        } else {
          alert('회원가입 실패');
        }
      });
  };

  return (
    <div className="signUp">
      <form id="signUpBox" className="signUpBox">
        <div className="profileBox">
          <label className="imgBoxLabel" htmlFor="profileImg">
            {imageUrl ? (
              <img className="labelImg" src={imageUrl} alt="uploadImg" />
            ) : null}
            <div className="imgUploadBtn">
              <i className="fa-sharp fa-solid fa-camera" />
            </div>
            <input
              id="profileImg"
              className="profileImgInput"
              type="file"
              name="profile_image"
              ref={imgRef}
              onChange={onChangeImage}
            />
          </label>
        </div>
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
          name="password"
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
        {!validator.email(email) && (
          <p
            className="inputCheck"
            style={{ display: email.length > 0 ? 'block' : 'none' }}
          >
            * 이메일 양식을 맞춰주세요!
          </p>
        )}
        {!validator.password(password) && (
          <p
            className="inputCheck"
            style={{ display: password.length > 0 ? 'block' : 'none' }}
          >
            * 비밀번호는 대소문자, 숫자, 특수문자 포함 8자리 이상 적어주세요!
          </p>
        )}
        {!validator.pwCheck(password) && (
          <p
            className="inputCheck"
            style={{ display: pwCheck.length > 0 ? 'block' : 'none' }}
          >
            * 비밀번호가 일치하지 않습니다.
          </p>
        )}
        <p className="userName title mustInput">이름</p>
        <input
          onChange={handleInput}
          className="userInputName input"
          name="name"
          type="text"
          placeholder="이름을(를) 입력하세요"
          autoComplete="username"
        />
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
        <p className="userPhoneNum title mustInput">휴대폰</p>
        <input
          onChange={handleInput}
          className="userInputNumber input"
          name="phone_number"
          type="text"
          placeholder="000-0000-0000 형식으로 입력하세요"
          autoComplete="username"
        />
        {!validator.phone_number(phone_number) && (
          <p
            className="inputCheck"
            style={{ display: phone_number.length > 0 ? 'block' : 'none' }}
          >
            * 숫자 사이에 하이픈(-)을 넣어주세요.
          </p>
        )}
        <div className="userBirth">
          <p className="title mustInput">생년월일</p>
          <div className="selectBox">
            <select className="select" name="year" onChange={handleInput}>
              {YEAR.map(y => {
                return <option key={y}>{y}</option>;
              })}
            </select>
            <select className="select" name="month" onChange={handleInput}>
              {MONTH.map(m => {
                return <option key={m}>{m}</option>;
              })}
            </select>
            <select className="select" name="day" onChange={handleInput}>
              {DAY.map(d => {
                return <option key={d}>{d}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="userDataSave">
          <p className="name title">개인정보 유효기간</p>
          {LIMIT_TIME.map(time => {
            return (
              <label key={time.id} className="one label">
                <input
                  className="radio"
                  name="time"
                  type="radio"
                  value={time.value}
                  onChange={handleInput}
                />
                <span className="text">{time.text}</span>
              </label>
            );
          })}
        </div>
        <div className={`signupBtn ${activeBtn}`} onClick={checkSignUp}>
          가입하기
        </div>
      </form>
    </div>
  );
}

export default SignUp;

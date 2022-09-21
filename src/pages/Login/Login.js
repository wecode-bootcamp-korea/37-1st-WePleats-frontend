import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="loginBox">
      <form className="inputBox">
        <input className="userInput" name="id" type="text" />
      </form>
    </div>
  );
}

export default Login;

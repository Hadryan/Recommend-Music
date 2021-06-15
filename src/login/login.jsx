import React, { Component } from "react";
import "./login.scss";

class Login extends React.Component {
  login_btn = () => {
    alert("Login Button!");
  };
  render() {
    return (
      <form action="index.html" method="post" class="loginForm">
        <h2>로그인</h2>
        <div class="idForm">
          <input type="text" class="id" placeholder="ID" />
        </div>
        <div class="passForm">
          <input type="password" class="pw" placeholder="PW" />
        </div>
        <button type="button" class="btn" onClick={this.login_btn}>
          LOG IN
        </button>
        <div class="bottomText">
          아이디가 없으신가요? <a href="signup">sign up</a>
        </div>
      </form>
    );
  }
}

export default Login;

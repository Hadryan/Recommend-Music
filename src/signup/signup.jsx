import React from "react";
import "./signup.scss";

class Signup extends React.Component {
  signup_btn = () => {
    console.log("signup Button!");
    //정보전달,,
  };
  render() {
    return (
      <form action="index.html" method="post" class="loginForm">
        <h2>회원가입</h2>
        <div class="idForm">
          <input type="text" class="id" placeholder="아이디" />
        </div>
        <div class="passForm">
          <input type="password" class="pw" placeholder="비밀번호" />
        </div>
        <div class="passForm_chck">
          <input type="password" class="pw" placeholder="비밀번호 확인" />
        </div>
        <button type="button" class="btn" onClick={this.signup_btn}>
          SIGN UP
        </button>
      </form>
    );
  }
}

export default Signup;

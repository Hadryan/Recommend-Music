import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <a href="/" className="logo">
          날씨음악
        </a>
        <div className="loginAndJoin">
          <a href="login" className="login">
            로그인
          </a>
          <a href="signup" className="signup">
            회원가입
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

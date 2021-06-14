import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <span className="logo">날씨음악</span>
        <div className="loginAndJoin">
          <a href="login.html" className="login">로그인</a>
          <a href="join.html" className="join">회원가입</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;

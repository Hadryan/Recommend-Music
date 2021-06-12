import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <span className="logo">날씨음악</span>
        <div className="loginAndJoin">
          <span className="login">로그인</span>
          <span className="join">회원가입</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;

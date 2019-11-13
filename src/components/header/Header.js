import React from "react";
import logo from "../../logo.svg";
import "./Header.scss";
function Header(props) {
  return (
    <div className="login-header">
      <img src={logo} alt="Logo" />
    </div>
  );
}

export default Header;

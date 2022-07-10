import React from "react";
import logo from "../image/logo.svg";


function Header(props) {
  const {children} = props;
  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__data">
          {/* <span className="header__email">{props.headerEmail}</span>
          <button className="header__button">{props.headerButton}</button> */}
      {children}
      </div>
    </header>
  );
}

export default Header;

import logo from "../images/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

function Header({
  linkName,
  routeName

}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого Сайта" />
      <p ><Link className="header__link" to={routeName}>{linkName}</Link></p>
    </header>
  );
}

export default Header;

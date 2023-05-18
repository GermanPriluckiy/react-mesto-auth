import logo from "../images/logo.svg";
import React from "react";
import { Link } from "react-router-dom";

function Header({ linkName, routeName, loggedIn, onLogout, userEmail }) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого Сайта" />
      {!loggedIn ? (
        <p>
          <Link className="header__link" to={routeName}>
            {linkName}
          </Link>
        </p>
      ) : (
        <div className="header__info">
          <p className="header__email">{userEmail}</p>
          <Link className="header__logout" to={routeName} onClick={onLogout}>
            Выйти
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;

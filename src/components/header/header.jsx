import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const Header = (props) => {

  const logoLink = `main.html`;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={logoLink} className={`header__logo-link ${props.logoLinkClass}`}>
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className={props.userNameClasses}>{props.userName}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  logoLinkClass: PropTypes.string,
  userNameClasses: PropTypes.string,
  userName: PropTypes.string,
};

export default Header;

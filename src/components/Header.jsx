// REACT HOOKS
import React from "react";

// STYLES
import "../styles/header.scss";

// FROM ASSETS
import Logo from "../assets/img/logo.png";
import bbcLogo from "../assets/img/logo-bbc.png";
import forbesLogo from "../assets/img/logo-forbes.png";
import techcrunchLogo from "../assets/img/logo-techcrunch.png";
import biLogo from "../assets/img/logo-bi.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="Nexter logo" />
      <h3 className="heading-3">Your own home:</h3>
      <h1 className="heading-1">The ultimate personal freedom</h1>
      <button className="btn header__btn">View our properties</button>
      <div className="header__seenon-text">As seen on</div>
      <div className="header__seenon-logos">
        <img src={bbcLogo} alt="BBC logo" />
        <img src={forbesLogo} alt="Forbes logo" />
        <img src={techcrunchLogo} alt="Tech Crunch logo" />
        <img src={biLogo} alt="Business Inside logo" />
      </div>
    </header>
  );
};

export default Header;

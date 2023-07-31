/* eslint-disable jsx-a11y/anchor-is-valid */
// REACT HOOKS
import React from "react";

// STYLES
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__item">
            <a href="#" className="nav__link">
              Find your dream home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Request proposal
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Download home planner
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact us
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Submit your property
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Come work with us!
            </a>
          </li>
        </ul>
      </nav>
      <p className="copyright">&copy; Copyright 2023 by Nexter Real Estata</p>
    </footer>
  );
};

export default Footer;

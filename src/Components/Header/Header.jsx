import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="container-fluid">
      <nav className="container d-flex justify-content-between align-items-center">
        <a href="" className="nav-brand">
          To<span>ur</span>
        </a>
        <ul className="nav-ul d-flex gap-5 text-capitalize align-items-center justify-content-center">
          <li className="active">
            <a href="">Discover</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">login</a>
          </li>

          <li>
            <button type="button" className="button">
              Register
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

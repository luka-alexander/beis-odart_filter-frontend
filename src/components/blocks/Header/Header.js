import React from "react";
import logo from "./images/logo-beis.png";

const Header = ({ label, text, type, id, value, handleChange }) => (
  <header className="page-header">
    <div className="row">
      <div className="col-8">
        <a href="/">
          <img src={logo} width="200px" alt="site logo" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;

import React from "react";

import "../styles/App.css";

import Logo from "../img/personagem-3d-logo.webp"

const Header = () => {
  return (
    <div className="container-header">
      <div className="content-header">
          <img className="logo-image" src={Logo} alt="Homem branco em pé com um laptop nas mãos"/>
          <h1 className="title-header">Gabriel Carvalho</h1>
      </div>
    </div>
  );
};

export default Header;

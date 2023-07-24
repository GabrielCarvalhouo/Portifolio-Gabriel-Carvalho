import React from "react";

import "../styles/Footer.css";

import { UpSquareOutlined } from "@ant-design/icons";

const Footer = () => {
  const buttonUp = document.querySelector(".btn-up");

  window.addEventListener("scroll", function (event) {
    window.scrollY = 0;
  });

  return (
    <div className="container-footer">
      <div className="content-footer">

        <div className="description">
          <ul>
            <li className="item1"><a href="https://github.com/GabrielCarvalhouo/Portifolio-Gabriel-Carvalho">Repositório deste site</a></li>
            <li className="item2"><a href="https://colorhunt.co/palette/001c30176b8764ccc5dafffb">Paleta de cores usada</a></li>
          </ul>
        </div>
        <div className="bottom-area">
          <p>Voltar ao Topo</p>
          <div className="btn-up-link">            
            <a href="#" className="btn-up">
              <UpSquareOutlined className="icon-btn-up" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;

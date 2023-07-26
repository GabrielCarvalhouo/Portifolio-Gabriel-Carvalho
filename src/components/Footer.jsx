import React from "react";

import "../styles/App.css";

import { UpSquareOutlined } from "@ant-design/icons";

const Footer = () => {
  const buttonUp = document.querySelector(".btn-up");

  window.addEventListener("scroll", function (event) {
    window.scrollY = 0;
  });

  return (
    <div className="btn-up-link">
      <a href="#" className="btn-up">
        <UpSquareOutlined className="icon-btn-up" />
      </a>
    </div>
  );
};

export default Footer;

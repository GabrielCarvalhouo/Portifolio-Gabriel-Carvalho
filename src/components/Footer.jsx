import React from "react";

import "../styles/App.css";

import { UpSquareOutlined } from "@ant-design/icons";

const Footer = () => {
  const buttonUp = document.querySelector(".btn-up");

  window.addEventListener("scroll", function (event) {
    window.scrollY = 0;
  });

  return (
    <div className="footer">
      <div className="content-footer">
        <div className="contacts">
          <h3>Contacts</h3>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/gabriel-carvalho-a110371a1/">
                Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com/GabrielCarvalhouo">Github</a>
            </li>
            <li>
              <a href="https://www.instagram.com/cafeemjava/">Instagram</a>
            </li>
          </ul>
        </div>
        <div className="btn-footer">
          <a href="#" className="btn-up">
            <UpSquareOutlined className="icon-btn-up" />
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;

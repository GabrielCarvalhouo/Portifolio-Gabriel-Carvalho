import React from "react";
import {
  LinkedinOutlined,
  GithubFilled,
  UserOutlined,
} from "@ant-design/icons";

import "../styles/Button.css";

const BtnLinks = () => {
  return (
    <div className="container-btn-area">
      <div className="content-btn-area">
        <div className="btn-area">
          <UserOutlined />
          <a href="#">
            <button className="btn">Sobre mim</button>
          </a>
        </div>

        <div className="btn-area">
          <GithubFilled />
          <a href="https://github.com/GabrielCarvalhouo">
            <button className="btn">github</button>
          </a>
        </div>

        <div className="btn-area">
          <LinkedinOutlined/>
          <a href="https://www.linkedin.com/in/gabriel-carvalho-a110371a1/">
            <button className="btn">linkedin</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BtnLinks;

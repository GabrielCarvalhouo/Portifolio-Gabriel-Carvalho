import React, { useState } from "react";

import { 
  GithubOutlined,
  LinkedinFilled,
  UserOutlined
} from '@ant-design/icons';

import "../styles/Button.css";

function BtnMenu() {
  const [active, setMode] = useState(false);
  const toggleMenu = () => {
    setMode(!active);
  };

  return (
    <div className="container-btn-menu">
      <div className={active ? "icon iconActive" : "icon"} onClick={toggleMenu}>
        <div className="hamburguer hamburguerIcon"></div>
      </div>
      <div className={active ? "menu menuOpen" : "menu menuClose"}>
        <div className="list">
          <ul className="list-items">
            <li>
              <GithubOutlined className="item-icon"/>
               <a target="_blank" href="https://github.com/GabrielCarvalhouo">github</a> 
            </li>
            <li>
              <LinkedinFilled className="item-icon"/>
               <a target="_blank" href="https://www.linkedin.com/in/gabriel-carvalho-a110371a1/">Linkedin</a> 
            </li>
            {/* <li>
              <UserOutlined className="item-icon"/>
               <a href="#">Sobre mim</a> 
            </li> */}
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default BtnMenu;

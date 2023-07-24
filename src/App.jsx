import React, { image } from "react";

import "./styles/App.css";

import Header from "./components/Header";
import BtnMenu from "./components/BtnMenu";
import Footer from "./components/Footer";

const App = () => {
  return (

    <div id="App-container">
      <div id="id-header">
        <Header />
        <BtnMenu />
      </div>
      <nav className="nav-container">
        <div className="middle-container">
          <div className="middle-content">
            <div className="-middle-items">
              <h1>Em breve atualizações</h1>
            </div>
          </div>
        </div>
        <div id="id-footer">
          <Footer />
        </div>
      </nav>
    </div>
  );
};

export default App;

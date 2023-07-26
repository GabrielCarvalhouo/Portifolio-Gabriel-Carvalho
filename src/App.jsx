import React from "react";

import "./styles/App.css";

import BtnMenu from "./components/BtnMenu";
import Header from "./components/Header";
import MiddlePage from "./components/MiddlePage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="app-container">
        <BtnMenu />
        <Header />
        <MiddlePage />
        <Footer/>
    </div>
  );
};

export default App;

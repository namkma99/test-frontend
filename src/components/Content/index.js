import React from "react";
import Banner from "./banner";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./style.css";

const Content = () => {
  return (
    <div className="contain-content">
      <div className="content">
        <Header />
        <Banner />
        <div className="flex-1">
          <Main />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Content;

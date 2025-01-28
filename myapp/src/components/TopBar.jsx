import React from "react";
import "../App.css";
import menu from "./../../public/icons8-menu-50.png";
const TopBar = () => {
  return (
    <section className="topBarSection">
      <div className="top-navbar">
        <div className="companyTitle">
          <img src={menu} alt="" className="menu" />
        </div>
        <div className="searchBar">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="getStart">Get Started</div>
    </section>
  );
};

export default TopBar;

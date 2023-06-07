import React from "react";
import "../styles/Header.css";
import Img from "../styles/logo.png";
const Header = () => {
  return (
    <>
      <div
        className="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <img
          src={Img}
          alt="Blueberries"
          height={"150px"}
          width={"200px"}
          style={{
            borderRadius: "20px",
            margin: "auto",
            border: "2px solid white",
          }}
        />
      </div>
      <nav>
        <ul className="navbar">
          <li className="navbar-item">
            <a href="/">Home</a>
          </li>
          <li className="navbar-item">
            <a href="/">About</a>
          </li>
          <li className="navbar-item">
            <a href="/">Services</a>
          </li>
          <li className="navbar-item">
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;

import React from "react";
import "./Banner.css";
import Navbar from "../Navbar/Navbar";

function Banner() {
  return (
    <div className="banner-container">
      <Navbar />
      <h1 className="awards-text">The Awards Wall</h1>
    </div>
  );
}

export default Banner;

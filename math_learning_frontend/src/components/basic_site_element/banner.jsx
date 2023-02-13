import React from "react";
import NavBar from "./navBar";

const Banner = ({ user }) => {
  return (
    <div className="banner">
      <div className="banner-right">
        <h1>MATH LEARNING SITE </h1>
        <NavBar user={user} />
      </div>
      <div className="banner-left">
        <img
          src="http://127.0.0.1:8000/media/static/images/logo.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Banner;

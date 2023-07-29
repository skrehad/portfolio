import React from "react";
import Logo from "../assets/LogoName.png";
import { Link } from "react-router-dom";
import "./Project1.css";

const Project1 = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <header className="pb-8 pt-2">
        <div className="container mx-auto">
          <div className=" flex justify-between items-center">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <Link to="/">
              <button className="btn btn-lg">Go To Home</button>
            </Link>
          </div>
        </div>
      </header>
      <div>
        <div className="">
          <div className="image image1"></div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
import React from "react";
import Logo from "../../assets/LogoName.png";
import { Link } from "react-scroll";
const Header = () => {
  return (
    <header className="pb-8 lg:pb-20 pt-2">
      <div className="container mx-auto">
        <div className=" flex justify-between items-center">
          <Link>
            <img src={Logo} alt="" />
          </Link>
          <Link to="contact">
            <button className="btn btn-sm">Work with me </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

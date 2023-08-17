import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="fixed top-1/4 left-4 z-50">
      <div className="w-[60px] items-center bg-black/20 backdrop-blur-2xl rounded-full flex flex-col justify-between text-2xl text-white/50">
        <Link
          to="home"
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-200}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiHomeAlt />
        </Link>
        <Link
          to="about"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BiUser />
        </Link>
        <Link
          to="services"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsClipboardData />
        </Link>
        <Link
          to="work"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsBriefcase />
        </Link>
        <Link
          to="contact"
          activeClass="active"
          smooth={true}
          spy={true}
          className="cursor-pointer w-[60px] h-[60px] flex items-center justify-center"
        >
          <BsChatSquare />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

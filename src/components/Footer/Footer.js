import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer mt-20 border-t text-center footer-center bg-base-200 pt-4 text-base-content">
      <div className="grid w-[300px] mx-auto grid-flow-col gap-4">
        <a href="#about" className="link link-hover">
          About us
        </a>
        <a href="#work" className="link link-hover">
          Work
        </a>
        <a href="#services" className="link link-hover">
          Services
        </a>
        <a href="#contact" className="link link-hover">
          Contact
        </a>
      </div>
      <div className="w-[120px] my-2 mx-auto">
        <div className="grid grid-flow-col gap-4">
          <a
            className="text-3xl cursor-pointer"
            href="https://github.com/skrehad"
            target="_blank"
            rel="noopener  noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            className="text-3xl cursor-pointer"
            href="https://github.com/skrehad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="text-3xl cursor-pointer"
            href="https://github.com/skrehad"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="mb-5">
        <p>Copyright © 2023 - All right reserved by SK Rehad</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-scroll";
import Image from "../../assets/avatar.svg";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import resume from "../../assets/Web Developer Resume (Rehad).pdf";

const Banner = () => {
  return (
    <section className="lg:min-h-[78vh] flex items-center lg:mb-28" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className="text-[50px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Saiful Islam <span>Rehad</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className="my-6  text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Web Developer",
                  2000,
                  "React Developer",
                  2000,
                  "Frontend Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg text-[20px] mx-auto lg:mx-0 "
            >
              A Passionate Front-end React Developer and MERN Stack Developer
              based in Dhaka, Bangladesh📍
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className="flex max-w-max items-center mb-12 mx-auto lg:mx-0"
            >
              <Link to="contact">
                <button className="btn btn-lg">Contact Me</button>
              </Link>

              <a href={resume} download="Resume">
                <button className="btn ml-5 btn-lg">My Resume</button>
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className="flex text-[30px] gap-x-6 max-w-max mx-auto lg:ml-24"
            >
              <a
                className="cursor-pointer"
                href="https://github.com/skrehad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.linkedin.com/in/md-rehad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                className="cursor-pointer"
                href="https://www.facebook.com/md.rehad.7393"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]"
          >
            <img src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Imag1 from "../../assets/1.png";
import Imag2 from "../../assets/2.png";
import Imag3 from "../../assets/3.png";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <section className="section lg:mb-20 lg:mt-40" id="work">
        <div className="container mx-auto">
          {/* <div>
            <h2 className="h2 leading-light text-accent">
              My Latest <br />
              Work
            </h2>
            <p className="max-w-sm mb-16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              architecto quis doloremque. Esse sequi reiciendis culpa laboriosam
              aliquam iure quam.
            </p>
            <Link to="seeProjectDetails">
              <button className="btn btn-sm mb-4">View all projects</button>
            </Link>
          </div> */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h2 className="h2 leading-light text-accent">
                My Latest <br />
                Work
              </h2>
              <p className="max-w-sm mb-16">
                I believe in pushing the boundaries of web design, ensuring each
                website I create is a unique masterpiece.
              </p>
              <Link to="seeProjectDetails">
                <button className="btn btn-sm mb-4">View all projects</button>
              </Link>
            </div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className=" mb-10 lg:mb-0"
            >
              <div className="group  relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
                <img
                  className="group-hover:scale-125 w-full
                  h-[315px] translate-all duration-500"
                  src={Imag1}
                  alt=""
                />
                <div className="absolute text-center w-full bottom-full group-hover:bottom-60 transition-all duration-700 z-50 ">
                  <span className="text-gradient">MERN Stack Website</span>
                </div>
                <div className="absolute text-center w-full bottom-full group-hover:bottom-48 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">
                    Name: Hotel Booking
                  </span>
                </div>

                <div className="absolute mx-2 text-center gap-2 grid grid-cols-3 bottom-full group-hover:bottom-32 transition-all duration-700 z-50 ">
                  <a
                    // className=" w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn w-full btn-sm">Live Site</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://github.com/skrehad/hotel-booking"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Client-Side Code</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://github.com/skrehad/hotel-booking-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Server-Side Code</button>
                  </a>
                </div>
                <div className="absolute w-full text-center bottom-full group-hover:bottom-16 transition-all duration-700 z-50 ">
                  <button className="btn btn-sm">Show Project Details</button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className=" mb-10 lg:mb-0"
            >
              <div className="group  relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
                <img
                  className="group-hover:scale-125 w-full h-[315px] translate-all duration-500"
                  src={Imag3}
                  alt=""
                />
                <div className="absolute text-center w-full bottom-full group-hover:bottom-60 transition-all duration-700 z-50 ">
                  <span className="text-gradient">MERN Stack Website</span>
                </div>
                <div className="absolute text-center w-full bottom-full group-hover:bottom-48 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">Name: Easy Shop</span>
                </div>

                <div className="absolute mx-2 text-center gap-2 grid grid-cols-3 bottom-full group-hover:bottom-32 transition-all duration-700 z-50 ">
                  <a
                    // className=" w-full"
                    href="https://easy-shop-20d6f.web.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn w-full btn-sm">Live Site</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://github.com/skrehad/easy-shop"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Client-Side Code</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://github.com/skrehad/easy-shop-server"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Server-Side Code</button>
                  </a>
                </div>
                <div className="absolute w-full text-center bottom-full group-hover:bottom-16 transition-all duration-700 z-50 ">
                  <button className="btn btn-sm">Show Project Details</button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className=" mb-10 lg:mb-0"
            >
              <div className="group  relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
                <img
                  className="group-hover:scale-125 w-full h-[315px] translate-all duration-500"
                  src={Imag2}
                  alt=""
                />
                <div className="absolute text-center w-full bottom-full group-hover:bottom-60 transition-all duration-700 z-50 ">
                  <span className="text-gradient">Frontend Website</span>
                </div>
                <div className="absolute text-center w-full bottom-full group-hover:bottom-48 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">
                    Name: SK GYM Website
                  </span>
                </div>

                <div className="absolute  gap-2 w-full grid grid-cols-2 bottom-full group-hover:bottom-32 transition-all duration-700 z-50 ">
                  <a
                    // className=" w-full"
                    href="https://gym-website-4d719.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn w-full btn-sm">Live Site</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://github.com/skrehad/SK-GYM-Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn  w-full btn-sm">
                      Client-Side Code
                    </button>
                  </a>
                  {/* <a
                    // className="text-center w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Server-Side Code</button>
                  </a> */}
                </div>
                <div className="absolute w-full text-center bottom-full group-hover:bottom-16 transition-all duration-700 z-50 ">
                  <button className="btn btn-sm">Show Project Details</button>
                </div>
              </div>
            </motion.div>

            {/* <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className=" mb-10 lg:mb-0"
            >
              <div className="group  relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
                <img
                  className="group-hover:scale-125 translate-all duration-500"
                  src={Imag1}
                  alt=""
                />
                <div className="absolute text-center w-full bottom-full group-hover:bottom-60 transition-all duration-700 z-50 ">
                  <span className="text-gradient">MERN Stack Website</span>
                </div>
                <div className="absolute text-center w-full bottom-full group-hover:bottom-48 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">
                    Name: Hotel Booking
                  </span>
                </div>

                <div className="absolute mx-2 text-center gap-2 grid grid-cols-3 bottom-full group-hover:bottom-32 transition-all duration-700 z-50 ">
                  <a
                    // className=" w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn w-full btn-sm">Live Site</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Client-Side Code</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Server-Side Code</button>
                  </a>
                </div>
                <div className="absolute w-full text-center bottom-full group-hover:bottom-16 transition-all duration-700 z-50 ">
                  <button className="btn btn-sm">Show Project Details</button>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
              className=" mb-10 lg:mb-0"
            >
              <div className="group  relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 translate-all duration-300"></div>
                <img
                  className="group-hover:scale-125 translate-all duration-500"
                  src={Imag1}
                  alt=""
                />
                <div className="absolute text-center w-full bottom-full group-hover:bottom-60 transition-all duration-700 z-50 ">
                  <span className="text-gradient">MERN Stack Website</span>
                </div>
                <div className="absolute text-center w-full bottom-full group-hover:bottom-48 transition-all duration-700 z-50 ">
                  <span className="text-3xl text-white">
                    Name: Hotel Booking
                  </span>
                </div>

                <div className="absolute mx-2 text-center gap-2 grid grid-cols-3 bottom-full group-hover:bottom-32 transition-all duration-700 z-50 ">
                  <a
                    // className=" w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn w-full btn-sm">Live Site</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Client-Side Code</button>
                  </a>
                  <a
                    // className="text-center w-full"
                    href="https://hotel-booking-6fdb2.web.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn btn-sm">Server-Side Code</button>
                  </a>
                </div>
                <div className="absolute w-full text-center bottom-full group-hover:bottom-16 transition-all duration-700 z-50 ">
                  <button className="btn btn-sm">Show Project Details</button>
                </div>
              </div>
            </motion.div> */}
          </div>
        </div>
      </section>
      <div className="text-center">
        <p className="text-2xl">Some Project Coming Soon...</p>
      </div>
    </div>
  );
};

export default Work;

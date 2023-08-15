import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFiletypeCss } from "react-icons/bs";
import {
  SiTailwindcss,
  SiDaisyui,
  SiFirebase,
  SiExpress,
} from "react-icons/si";
import { DiJavascript1, DiNodejs, DiMongodb } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

const Skills = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewPort={{ once: false, amount: 0.7 }}
      className="my-10 text-center"
    >
      <div className="">
        <div className="text-4xl mb-10 my-auto">My Skills</div>
        <div className="lg:flex mx-10 grid grid-cols-4 justify-center text-center gap-5">
          <div className="text-[50px]">
            <AiFillHtml5></AiFillHtml5>
          </div>
          <div className="text-[50px]">
            <BsFiletypeCss></BsFiletypeCss>
          </div>
          <div className="text-[60px]">
            <DiJavascript1></DiJavascript1>
          </div>
          <div className="text-[50px]">
            <FaReact></FaReact>
          </div>
          <div className="text-[50px]">
            <SiTailwindcss></SiTailwindcss>
          </div>
          <div className="text-[60px]">
            <SiDaisyui></SiDaisyui>
          </div>
          <div className="text-[60px]">
            <DiNodejs></DiNodejs>
          </div>
          <div className="text-[60px]">
            <DiMongodb></DiMongodb>
          </div>
          <div className="text-[50px]">
            <SiExpress></SiExpress>
          </div>
          <div className="text-[50px]">
            <SiFirebase></SiFirebase>
          </div>
          <div className="text-[50px]">
            <FiFigma></FiFigma>
          </div>
        </div>
      </div>
    </motion.div>

    // <motion.div
    //   variants={fadeIn("up", 0.3)}
    //   initial="hidden"
    //   whileInView={"show"}
    //   viewPort={{ once: false, amount: 0.7 }}
    //   className="my-10 text-center"
    // >
    //   <div className="flex justify-center gap-5">
    //     <div className="text-4xl my-auto ml-10">My Skills</div>
    //     <div className="flex gap-5">
    //       <div className="text-[50px]">
    //         <AiFillHtml5></AiFillHtml5>
    //       </div>
    //       <div className="text-[42px]">
    //         <BsFiletypeCss></BsFiletypeCss>
    //       </div>
    //       <div className="text-[50px]">
    //         <DiJavascript1></DiJavascript1>
    //       </div>
    //       <div className="text-[50px]">
    //         <FaReact></FaReact>
    //       </div>
    //       <div className="text-[50px]">
    //         <SiTailwindcss></SiTailwindcss>
    //       </div>
    //       <div className="text-[50px]">
    //         <SiDaisyui></SiDaisyui>
    //       </div>
    //       <div className="text-[50px]">
    //         <DiNodejs></DiNodejs>
    //       </div>
    //       <div className="text-[50px]">
    //         <DiMongodb></DiMongodb>
    //       </div>
    //       <div className="text-[50px]">
    //         <SiExpress></SiExpress>
    //       </div>
    //       <div className="text-[50px]">
    //         <SiFirebase></SiFirebase>
    //       </div>
    //       <div className="text-[50px]">
    //         <FiFigma></FiFigma>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default Skills;

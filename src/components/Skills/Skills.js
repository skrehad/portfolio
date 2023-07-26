import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Skills = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView={"show"}
      viewPort={{ once: false, amount: 0.7 }}
      className="my-10 text-center"
    >
      My Skills
    </motion.div>
  );
};

export default Skills;

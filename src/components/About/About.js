import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import image from "../../assets/about1.jpg";
import { Link } from "react-scroll";
import resume from "../../assets/Web Developer Resume (Rehad).pdf";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section lg:mb-20" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
            className="flex-1  bg-contain  mix-blend-lighten"
          >
            <img src={image} alt="" srcset="" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me.</h2>

            <p className="mb-6 text-xl">
              As a MERN stack developer, I thrive on transforming innovative
              ideas into reality through code. With a strong foundation in
              MongoDB, Express.js, React.js, and Node.js, I possess the skills
              to architect, develop, and deploy feature-rich web applications
              that deliver exceptional user experiences. My commitment to
              staying updated with the latest web technologies empowers me to
              continuously improve and deliver efficient, scalable, and elegant
              solutions for every project I undertake.
            </p>
            <div className="grid grid-cols-2 text-center mb-12">
              <div>
                <div className="text-[40px] text-center font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-center text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div>
                <div className="text-[40px] text-center font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={30} duration={3} /> : null}+
                </div>
                <div className="font-primary text-center text-sm tracking-[2px]">
                  Projects <br />
                  Complete
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 text-center ">
              <Link to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href={resume} download="Resume">
                <button className="btn ml-5 btn-lg">My Resume</button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

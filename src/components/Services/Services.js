import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "Website Design and Development",
    description:
      "I provide professional and innovative website design and development services to help businesses establish a strong online presence and achieve their digital goals.",
  },
  {
    name: "Full-Stack Development",
    description:
      " As a Full-Stack Developer, I have successfully designed and implemented dynamic web applications, showcasing my proficiency in both front-end and back-end technologies ",
  },
  {
    name: "Responsive Web Design",
    description:
      " As a skilled web developer, I craft visually engaging and user-friendly websites through responsive design techniques.",
  },
  {
    name: "Website Maintenance and Support",
    description:
      "As a dedicated Website Maintenance and Support professional, I excel in providing assistance and ensuring seamless online experiences for clients.",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent">What I Do.</h2>
            <h3 className="h4 max-w-[455px] mb-16">
              As a MERN stack developer, I specialize in building full-stack web
              applications using MongoDB, Express.js, React.js, and Node.js,
              seamlessly integrating the front-end and back-end to create robust
              and dynamic user experiences.
            </h3>
            <Link to="work">
              <button className="btn btn-sm">See my work</button>
            </Link>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div>
                      {/* <div className="max-w-[476px]"> */}
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-4">
                        {" "}
                        {name}
                      </h4>
                      <p className="font-secondary leading-light">
                        {description}
                      </p>
                    </div>
                    {/* <div className="flex flex-col flex-1 items-end">
                      <Link className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowRight />
                      </Link>
                      <Link className="text-gradient text-sm">{link}</Link>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;

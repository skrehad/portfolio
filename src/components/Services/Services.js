import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-scroll";

const services = [
  {
    name: "Website Design and Development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloribus perferendis similique odio? Debitis voluptatum! ",
    link: "Learn more",
  },
  {
    name: "Full-Stack Development",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloribus perferendis similique odio? Debitis voluptatum! ",
    link: "Learn more",
  },
  {
    name: "Responsive Web Design",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloribus perferendis similique odio? Debitis voluptatum! ",
    link: "Learn more",
  },
  {
    name: "Website Maintenance and Support",
    description:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos doloribus perferendis similique odio? Debitis voluptatum! ",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewPort={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I,m a Freelancer Front-end Developer with over 3 years of
              experience
            </h3>
            <button className="btn btn-sm">See my work</button>
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
                const { name, description, link } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {" "}
                        {name}
                      </h4>
                      <p className="font-secondary leading-light">
                        {description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end">
                      <Link className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowRight />
                      </Link>
                      <Link className="text-gradient text-sm">{link}</Link>
                    </div>
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

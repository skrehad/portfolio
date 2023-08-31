import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link, useNavigate } from "react-router-dom";

const Work = () => {
  const [works, setWorks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./work.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  const handleShowDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <div>
      <section className="section lg:mb-64 lg:mt-80" id="work">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewPort={{ once: false, amount: 0.7 }}
            >
              <h2 className="h2 text-orange-200 leading-light ">
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
            </motion.div>

            {works.map((work) => (
              <motion.div
                key={work.id}
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
                    src={work.img}
                    alt=""
                  />
                  <div className="absolute text-center w-full bottom-full group-hover:bottom-60 transition-all duration-700 z-50 ">
                    <span className="text-gradient">{work.type}</span>
                  </div>
                  <div className="absolute text-center w-full bottom-full group-hover:bottom-48 transition-all duration-700 z-50 ">
                    <span className="text-3xl text-white">
                      Name: {work.name}
                    </span>
                  </div>

                  <div className="absolute w-full mx-2 text-center gap-2 grid grid-cols-3 bottom-full group-hover:bottom-32 transition-all duration-700 z-50 ">
                    <a href={work.liveSite} target="_blank" rel="noreferrer">
                      <button className="btn w-full btn-sm">Live Site</button>
                    </a>
                    <a href={work.clientSite} target="_blank" rel="noreferrer">
                      <button className="btn btn-sm">Client-Side</button>
                    </a>
                    {work.serverSite ? (
                      <a
                        href={work.serverSite}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="btn btn-sm">Server-Side</button>
                      </a>
                    ) : (
                      <button className="btn btn-sm">No Server-Site</button>
                    )}
                  </div>
                  <div className="absolute w-full text-center bottom-full group-hover:bottom-16 transition-all duration-700 z-50 ">
                    <button
                      className="btn btn-sm"
                      onClick={() => handleShowDetails(work.id)}
                    >
                      Show Project Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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

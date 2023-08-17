import React, { useEffect, useState } from "react";
import Logo from "../assets/LogoName.png";
import { Link, useParams } from "react-router-dom";
import "./Project1.css";
import { AiOutlineStar } from "react-icons/ai";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Project1 = () => {
  const { projectId } = useParams();
  // console.log(projectId);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      type: "MERN Stack Website",
      name: "Hotel Booking",
      liveSite: "https://hotel-booking-6fdb2.web.app/",
      clientSite: "https://github.com/skrehad/hotel-booking",
      serverSite: "https://github.com/skrehad/hotel-booking-server",
      imageUrls: [
        "https://i.ibb.co/27BYxfQ/Home-Hotel-Booking.png",
        "https://i.ibb.co/jTTQTHB/About-Hotel-Booking.png",
        "https://i.ibb.co/GJTmg5R/Admin-Dashboard.png",
        "https://i.ibb.co/wwhkPwK/Hotels-Hotel-Booking.png",
        "https://i.ibb.co/R0sMrj0/Login-Hotel-Booking.png",
      ],
      projectAbout: [
        "This is a Hotel Booking Website, Where user can Login (Google && FaceBook) and Register.",
        "Responsive design that allows users to access and book hotels on various devices, including smartphones and tablets.",
        "The ability to add, edit, and delete user accounts, as well as assign user roles and permissions.",
        "User can booking a hotel that's showing on User DashBoard.",
        "User can remove User booking hotel from User DashBoard.",
        "User can show hotels with images, descriptions, pricing, rating, and availability information directly connected with the backend.",
        "User can review website which also shows the home page in testimonial.",
        "Access to the database of the website or application for data management and backup purposes.",
        "Users can enter their travel destination, check-in and check-out dates, and the number of guests to find available hotels in the area.",
        "The website compares prices from hotels and booking platforms, helping users find the best deals and discounts.",
        "That hole process connects to the backend.",
        "Admin panel: An Admin can control users,add a hotel,manage hotels,edit hotels,add a blog,add a gallery picture,control everything in this website",
      ],
      technologyUsed:
        "React, Node js, Express js, MongoDB, Firebase, tailwind,dasy UI, react-router, react day-picker,react-hot-toast,react-icon, etc…",
    },
    {
      id: 2,
      type: "Frontend Website",
      name: "GYM Website",
      liveSite: "https://gym-website-4d719.web.app/",
      clientSite: "https://github.com/skrehad/SK-GYM-Website",
      imageUrls: [
        "https://i.ibb.co/SK5CdV2/Sk-GYM-Website.png",
        "https://i.ibb.co/NrfZKKp/Sk-GYM-Website1.png",
        "https://i.ibb.co/tC1NQ5Y/Sk-GYM-Website2.png",
        "https://i.ibb.co/TBtGXXX/Sk-GYM-Website5.png",
        "https://i.ibb.co/dtmr7K1/Sk-GYM-Website7.png",
      ],
      projectAbout: [
        "This is a gym's website as a comprehensive and user-friendly resource for individuals seeking fitness information and services.",
        "The website provides a diverse array of features, encompassing information about skilled trainers, class timetables, educational blogs, clear pricing information, and a glimpse into the fitness community.",
        "These elements collectively create a well-rounded platform catering to users' fitness needs and fostering a sense of belonging within the fitness community.",
        "The website's design is aimed at supporting users in their pursuit of fitness goals and a healthier lifestyle.",
        "The user-friendly interface streamlines the process of booking and managing class attendance, contributing to an enhanced overall user experience.",
        "This feature simplifies engagement, ensuring that individuals can effortlessly secure their spot in classes and efficiently organize their fitness routines.",
      ],
      technologyUsed:
        "React, Firebase, tailwind,dasy UI, react-router,react-hot-toast,react-icon, etc…",
    },
    {
      id: 3,
      type: "MERN Stack Website",
      name: "Easy Shop",
      liveSite: "https://easy-shop-20d6f.web.app/",
      clientSite: "https://github.com/skrehad/easy-shop",
      serverSite: "https://github.com/skrehad/easy-shop-server",
      imageUrls: [
        "https://i.ibb.co/yYCgmVN/Home-Easy-Shop.png",
        "https://i.ibb.co/17Mvsgd/About-Easy-Shop.png",
        "https://i.ibb.co/R3sr5V8/Products-Easy-Shop.png",
        "https://i.ibb.co/DgN5L4H/My-Order-Easy-Shop.png",
        "https://i.ibb.co/vVK906K/Contact-Easy-Shop.png",
      ],
      projectAbout: [
        " This is an E-Commerce website that offers user-friendly features for both logging in and registration through Google and GitHub accounts.",
        "The website is designed to be fully responsive on mobile devices, ensuring a seamless browsing experience. ",
        "Users are empowered to contribute by adding reviews, which are prominently displayed on the home page.",
        "The platform enables users to conveniently manage their interactions, allowing them to remove hotel bookings and orders directly from their respective dashboards or order cards. ",
        "The website showcases products and services comprehensively, featuring images, detailed descriptions, pricing, ratings, and availability information.  ",
        "Furthermore, users are given the opportunity to review individual products, with the added functionality of accessing detailed order pages directly from these reviews. ",
        "User can review each product which also shows the details order page in your review.",
        "The entire process is seamlessly integrated with the backend, providing a cohesive and efficient user experience.",
      ],
      technologyUsed:
        "React, Node js, Express js, MongoDB,Firebase, tailwind,dasy UI, react-router, react day-picker,react-hot-toast,react-icon, etc…",
    },

    {
      id: 4,
      type: "MERN Stack Website",
      name: "Doctor Portal Website",
      liveSite: "https://doctors-portal-a9d65.web.app/",
      clientSite: "https://github.com/skrehad/doctor-portal",
      serverSite: "https://github.com/skrehad/doctor-portal-sevser-site",
      imageUrls: [
        "https://i.ibb.co/z5NxCBD/Doctor-Portal-1.png",
        "https://i.ibb.co/TvLLnGp/Doctor-Portal-2.png",
        "https://i.ibb.co/tPzvY0K/Doctor-Portal-3.png",
        "https://i.ibb.co/sbz7nq6/Doctor-Portal-4.png",
        "https://i.ibb.co/3Nmgj8s/Doctor-Portal-5.png",
      ],
      projectAbout: [
        "Our platform offers convenient login options through Google and Facebook accounts, ensuring a quick and hassle-free entry for users. New users can easily register to create their accounts.",
        "We understand the importance of accessibility. Our responsive design guarantees that users can effortlessly access and book appointments with doctors from a variety of devices, including smartphones and tablets.",
        "Administrators have the power to manage user accounts effectively. This involves adding, editing, and deleting accounts, as well as assigning roles and permissions to ensure smooth user management.",
        "Users can easily browse through the list of available doctors and book appointments directly from their personalized User Dashboard. ",
        "Users can take control of their appointments by conveniently removing bookings they no longer need, enhancing flexibility and user autonomy.",
        "Our platform provides access to the website or application's database, offering robust data management and backup capabilities.",
        "Users can describe their medical issues and concerns, facilitating effective communication between patients and doctors.",
        "Our website goes beyond just booking appointments. It features a unique price comparison function, allowing users to compare prices and services from various doctors and doctor service platforms. ",
        "The entire process, from user authentication to appointment booking and data management, is seamlessly integrated with the backend, ensuring a smooth and efficient experience.",
        "An intuitive and powerful Admin panel puts control in the hands of administrators. They can manage users, add new doctors, oversee existing doctors, publish informative blogs, and maintain comprehensive control over every aspect of the website.",
      ],
      technologyUsed:
        "React, Node js, Express js, MongoDB, Firebase, tailwind,dasy UI, react-router, react day-picker,react-hot-toast,react-icon, etc…",
    },
    {
      id: 5,
      type: "Frontend Website",
      name: "Portfolio Website",
      liveSite: "https://portfolio-5db0d.web.app/",
      clientSite: "https://github.com/skrehad/portfolio",
      imageUrls: [
        "https://i.ibb.co/wgyjVcJ/Rehad-Portfolio.png",
        "https://i.ibb.co/9NMrqJt/Rehad-Portfolio2.png",
        "https://i.ibb.co/Dr9DFkM/Rehad-Portfolio4.png",
        "https://i.ibb.co/dJSSDRM/Rehad-Portfolio1.png",
        "https://i.ibb.co/L9KCYQF/Rehad-Portfolio3.png",
      ],
      projectAbout: [
        "Welcome to my portfolio website, where I bring my passion for frontend and MERN stack development to life. With a dedication to crafting seamless user experiences and building robust web applications, I'm excited to showcase the projects and skills that define my journey as a developer.Dive into my collection of projects that encapsulate my frontend and MERN stack proficiency. From responsive user interfaces to dynamic full-stack applications, each project represents a unique challenge and an opportunity to innovate.Code is my canvas, where I paint solutions to intricate challenges. Take a look at some code samples that exemplify my problem-solving approach and coding style.Throughout my journey, I've had the privilege of working with diverse teams and clients to bring ideas to life. With a solid foundation in frontend technologies and a flair for backend development using the MERN stack, I'm equipped to transform concepts into fully functional applications.Connect with me via email or find me on LinkedIn, where we can embark on a journey of innovation and learning together.Thank you for visiting my portfolio website. I invite you to explore the projects, delve into the code, and get to know the developer behind the screen. Together, let's create digital experiences that leave a lasting impact.",
      ],
      technologyUsed:
        "React,CSS, tailwind,dasy UI, react-router,react-icon, etc…",
    },
  ];

  useEffect(() => {
    setSelectedProject(
      projectData.find((work) => work.id === parseInt(projectId))
    );
  }, [projectId]);
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <header className="pb-8 pt-2">
        <div className="container mx-auto">
          <div className=" flex justify-between items-center">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <Link to="/">
              <button className="btn btn-lg">Go To Home</button>
            </Link>
          </div>
        </div>
      </header>
      <div>
        <div className="mx-5 mb-20 md:mx-16 lg:mx-20">
          {selectedProject && (
            <div className="project-details">
              <h1 className="text-4xl text-center mb-2">
                <span className="font-bold">Website Name:</span>
                <span className="text-yellow-400 ml-2">
                  {selectedProject.name}
                </span>
              </h1>
              <h1 className="text-3xl text-center mb-5">
                <span className="text-yellow-400 ml-2">
                  {selectedProject.type}
                </span>
              </h1>
              <div>
                <div className="my-10 h-[500px] grid gap-7 md:grid-cols-2 lg:grid-cols-2">
                  <div>
                    {selectedProject.imageUrls
                      .slice(0, 1)
                      .map((imageUrl, index) => (
                        <div
                          key={index}
                          className="image h-[500px] rounded-xl"
                          style={{ backgroundImage: `url(${imageUrl})` }}
                        ></div>
                      ))}
                  </div>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2">
                    {selectedProject.imageUrls
                      .slice(1, 5)
                      .map((imageUrl, index) => (
                        <div
                          key={index}
                          className="image rounded-xl"
                          style={{ backgroundImage: `url(${imageUrl})` }}
                        ></div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="gap-2 mb-5 grid grid-cols-3">
                <a
                  href={selectedProject.liveSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn w-full btn-sm">Live Site</button>
                </a>
                <a
                  href={selectedProject.clientSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn w-full btn-sm">
                    Client-Side Code
                  </button>
                </a>
                {selectedProject.serverSite ? (
                  <a
                    href={selectedProject.serverSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="btn w-full btn-sm">
                      Server-Side Code
                    </button>
                  </a>
                ) : (
                  <button className="btn w-full btn-sm">No Server-Site</button>
                )}
              </div>
              <div>
                <div>
                  <h1 className="text-3xl text-center mb-5">
                    <span className="text-yellow-400 ml-2">
                      Project Details
                    </span>
                  </h1>
                </div>
                <div>
                  {selectedProject.projectAbout.map((about, index) => (
                    <div
                      key={index}
                      className="text-stone-300 font-bold text-[20px]"
                    >
                      <div className="flex">
                        <AiOutlineStar className="text-yellow-400 mt-1 mr-2"></AiOutlineStar>
                        {about}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h1 className="text-3xl mt-5">
                <span className=" font-bold">Technology Used:</span>
                <span className="text-yellow-400 ml-2">
                  {selectedProject.technologyUsed}
                </span>
              </h1>
            </div>
          )}
          <div className="text-center my-10">
            <Link to="/">
              <button className="btn btn-sm">Go To Home</button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="footer mt-20 border-t text-center footer-center bg-base-200 pt-4 text-base-content">
        <div className="grid w-[300px] mx-auto grid-flow-col gap-4">
          <a href="#about" className="link link-hover">
            About Me
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
              href="https://www.facebook.com/md.rehad.7393"
              target="_blank"
              rel="noopener  noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              className="text-3xl cursor-pointer"
              href="https://www.linkedin.com/in/md-rehad"
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
    </div>
  );
};

export default Project1;

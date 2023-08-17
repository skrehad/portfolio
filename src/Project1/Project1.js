import React, { useEffect, useState } from "react";
import Logo from "../assets/LogoName.png";
import { Link, useParams } from "react-router-dom";
import "./Project1.css";
import { AiOutlineStar } from "react-icons/ai";

const Project1 = () => {
  const { projectId } = useParams();
  // console.log(projectId);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectData = [
    {
      id: 1,
      type: "MERN Stack Website",
      name: "Hotel Booking",
      imageUrls: [
        "https://i.ibb.co/27BYxfQ/Home-Hotel-Booking.png",
        "https://i.ibb.co/27BYxfQ/Home-Hotel-Booking.png",
        "https://i.ibb.co/27BYxfQ/Home-Hotel-Booking.png",
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
        <div className="mx-10 mb-20 md:mx-16 lg:mx-20">
          {selectedProject && (
            <div className="project-details">
              <h1 className="text-3xl text-center mb-2">
                <span className="font-bold">Website Name:</span>
                <span className="text-yellow-400 ml-2">
                  {selectedProject.name}
                </span>
              </h1>
              <h1 className="text-2xl text-center mb-5">
                <span className="text-yellow-400 ml-2">
                  {selectedProject.type}
                </span>
              </h1>
              <div>
                <div className="my-10 grid gap-7 md:grid-cols-2 lg:grid-cols-2">
                  <div>
                    {selectedProject.imageUrls
                      .slice(0, 1)
                      .map((imageUrl, index) => (
                        <div
                          key={index}
                          className="image rounded-2xl"
                          style={{ backgroundImage: `url(${imageUrl})` }}
                        ></div>
                      ))}
                  </div>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-2">
                    {selectedProject.imageUrls
                      .slice(0, 2)
                      .map((imageUrl, index) => (
                        <div
                          key={index}
                          className="image rounded-2xl"
                          style={{ backgroundImage: `url(${imageUrl})` }}
                        ></div>
                      ))}
                  </div>
                </div>
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
    </div>
  );
};

export default Project1;

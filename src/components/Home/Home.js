import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Services from "../Services/Services";
import Work from "../Work/Work";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header></Header>
      <Banner></Banner>
      <Skills></Skills>
      <Nav></Nav>
      <About></About>
      <Services></Services>
      <Work></Work>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;

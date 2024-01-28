import React from "react";
import Book from "./Book";
import Packages from "./Packages";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";



const Home = () => {
  return (
    <>
     
      <div className="home vh-100 p-3 text-center">
        <div className="content container mt-4">
          <h5>Welcome to our Website</h5>
          <div className="fs-1 mb-3">
            Visit <span className="changecontent fs-1"></span>
          </div>
          <p className="fs-5 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa,
            nulla!
          </p>
          <a className="booknow p-2" href="#book">
            Book now
          </a>
        </div>
      </div>
      <Book />
      <Packages />
      <Testimonials />
      <About />
      <Footer/>
    </>
  );
};

export default Home;

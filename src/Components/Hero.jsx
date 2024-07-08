import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <div className="relative">
        <h1 className="text-6xl font-semibold mb-8 text-white">
          Fast and Easy Way to <span className="text-lime-500">Rent</span> a Car
        </h1>
        <p className="text-lg font-semibold text-white lg:w-4/5 mx-auto">
          We believe in providing affordable car rental options without
          compromising on quality. With our competitive prices and transparent
          pricing policy, you can enjoy peace of mind knowing you're getting the
          best deal. Explore our fleet of Top-Quality vehicles and enjoy a
          hasslefree rental experience. Whether it's a business trip or weekend
          getaway, We've got the perfect ride for you.
        </p>
        <div className="herobutton">
        <Link to="/cars">See All Cars</Link>
      </div>
      </div>
      
    </section>
  );
};

export default Hero;

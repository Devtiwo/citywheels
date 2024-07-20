import React from 'react';
import Navbar from "../Components/Navbar"
import Hero from "../Components/Hero";
import Howitworks from '../Components/Howitworks';
import AboutUs from '../Components/AboutUs';
import Whychooseus from '../Components/Whychooseus';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Howitworks />
      <AboutUs />
      <Whychooseus />
      <Footer />
    </>
  )
}

export default Home;
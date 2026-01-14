import React from "react";
import Navbar from "./Navbar";
import HeroSection from "../HeroSection/HeroSection";
import PropertyGrid from "../Property_Grid/PropertyGrid";
import PropertyCategories from "./PropertyCategories";
import ChooseUs from "../ChooseUs/ChooseUs";
import SimpleProcess from "../Simple/SimpleProcess";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PropertyGrid/>
      <PropertyCategories/>
      <ChooseUs/>
      <SimpleProcess/>
      <Testimonials/>
      <Footer/>
    </>
  );
};

export default HomePage;

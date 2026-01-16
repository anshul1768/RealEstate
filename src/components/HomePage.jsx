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
     {/* <Helmet>
        <title>Ahinsa GreenValley | Plots & Villas</title>
        <meta name="description" content="Buy plots and villas in Ahinsa GreenValley. Book your site visit now." />
      </Helmet> */}
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

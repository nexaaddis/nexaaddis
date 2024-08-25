import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
// import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/projects/Projects";
import Blog from "../components/Sections/Blog";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Sections/Footer"
import TestimonialSlider from "../components/Elements/TestimonialSlider";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      {/* <Header /> */}
      <Banner />
      <Services />
      <Projects />
      <Blog />
      <TestimonialSlider />
      {/* <Pricing /> */}

      <Contact />
      <Footer />
    </>
  );
}



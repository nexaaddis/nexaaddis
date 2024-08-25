import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import HeroSection from './HeroSection'
import AboutUsContent from "./AboutUsContent";
import Footer from '../../components/Sections/Footer'
import Contact from "../../components/Contact/Contact";
import { aboutbg } from '../../assets'

export default function AboutUs() {
  return (
    <div style={{ position: "relative" }}>
      <HeroSection />
      <AboutUsContent />
      <Contact />
      <Footer />
    </div>

  );
}

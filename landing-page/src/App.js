import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./pages/Home/Landing.jsx";
import Aboutus from "./pages/aboutus/Aboutus.jsx";
import TopNavbar from "./components/Nav/TopNavbar";
import ScrollToTop from "./components/Elements/ScrollToTop.jsx";
import Contact from "./pages/Contact/Contact.jsx";

export default function App() {
  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <ScrollToTop />
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

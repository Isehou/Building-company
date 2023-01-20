import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Construction from "./pages/Construction";
import News from "./pages/News";
import ContactUs from "./pages/ContactUs";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/items/ScrollToTop";

function App() {
  const links = [
    { label: "Home", link: "/" },
    { label: "Construction", link: "/construction" },
    { label: "About Us", link: "/about-us" },
    { label: "News", link: "/News" },
    { label: "Contact Us", link: "/contact-us" },
  ];
  return (
    <div className="App">
      <ScrollToTop />
      <Header links={links}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

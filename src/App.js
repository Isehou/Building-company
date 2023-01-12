import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Construction from "./pages/Construction";
import Maintenance from "./pages/Maintenance";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const links = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about-us" },
    { label: "Construction", link: "/construction" },
    { label: "Maintenance", link: "/maintenance" },
  ];
  return (
    <div className="App">
      <ScrollToTop />
      <Header links={links}></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

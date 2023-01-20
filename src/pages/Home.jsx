import React, { useState, useEffect } from "react";
import "./pages-style/page-style.css";
import "./pages-style//home.css";
import SwiperImg from "../components/items/SwiperImg";
import { MdSmartphone } from "react-icons/md";
import { SwiperSlide } from "swiper/react";
import BuildingTypes from "../components/items/BuildingTypesImage";

function Home() {
  const contactUs = [
    { title: "London", phone: "049 160-5556-417" },
    { title: "Berlin", phone: "050 161-5557-702" },
    { title: "Manchester", phone: "063 162-5570-500" },
  ];

  return (
    <div className="wrapper">
      <div className="homepage">
        <SwiperImg className="swiper">
          <SwiperSlide></SwiperSlide>
        </SwiperImg>
        <div className="homepage__contact-us">
          <div className="call-card">
            <div className="contact-us__frame">
              <div className="phone-logo">
                <MdSmartphone className="MdSmartphone"></MdSmartphone>
              </div>
              <div className="contact-us__location">
                <h3>{contactUs[0].title}</h3>
                <p>{contactUs[0].phone}</p>
              </div>
            </div>
            <div className="contact-us__frame frame-two">
              <div className="phone-logo">
                <MdSmartphone className="MdSmartphone"></MdSmartphone>
              </div>
              <div className="contact-us__location">
                <h3>{contactUs[1].title}</h3>
                <p>{contactUs[1].phone}</p>
              </div>
            </div>
            <div className="contact-us__frame">
              <div className="phone-logo">
                <MdSmartphone className="MdSmartphone"></MdSmartphone>
              </div>
              <div className="contact-us__location">
                <h3>{contactUs[2].title}</h3>
                <p>{contactUs[2].phone}</p>
              </div>
            </div>
          </div>
        </div>
        <BuildingTypes></BuildingTypes>
      </div>
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import "./pagestyle.css";
import "./home.css";
import SwiperImg from "../components/SwiperImg";
import { MdSmartphone } from "react-icons/md";
import { SwiperSlide } from "swiper/react";
import BuildingTypes from "../components/BuildingTypes";

function Home() {
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
                <h3>London</h3>
                <p>049 160-5556-417</p>{" "}
              </div>
            </div>
            <div className="contact-us__frame frame-two">
              <div className="phone-logo">
                <MdSmartphone className="MdSmartphone"></MdSmartphone>
              </div>
              <div className="contact-us__location">
                <h3>Berlin</h3>
                <p>049 160-5556-417</p>
              </div>
            </div>
            <div className="contact-us__frame">
              <div className="phone-logo">
                <MdSmartphone className="MdSmartphone"></MdSmartphone>
              </div>
              <div className="contact-us__location">
                <h3>Manchester </h3>
                <p>049 160-5556-417</p>
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

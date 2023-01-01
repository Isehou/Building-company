import React, { useState, useEffect } from "react";
import "./pagestyle.css";
import "./home.css";
import SwiperImg from "../components/SwiperImg";

function Home() {
  return (
    <div className="wrapper">
      <div className="homepage">
        <SwiperImg className="swiper"></SwiperImg>
        <div className="homepage__contact-us">
          <div className="contact-us__frame">
            London<p>0151 427-9169</p>
          </div>
          <div className="contact-us__frame frame-two">
            Berlin
            <p>049 160-5556-417</p>
          </div>
          <div className="contact-us__frame">
            Manchester<p>0151 427 9169</p>
          </div>
        </div>

        <div className="homepage__photo-frame">photo-frame</div>
      </div>
    </div>
  );
}

export default Home;

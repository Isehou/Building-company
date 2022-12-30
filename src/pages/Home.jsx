import React, { useState, useEffect } from "react";
import "./pagestyle.css";
import "./home.css";
import SwiperImg from "../components/SwiperImg";

function Home() {
  return (
    <div className="wrapper">
      <div className="homepage">
        <SwiperImg className="swiper"></SwiperImg>
        <div>hello</div>
      </div>
    </div>
  );
}

export default Home;

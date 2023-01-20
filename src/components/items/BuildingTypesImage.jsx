import React from "react";
import img1 from "../image/health-build.jpg";
import img2 from "../image/2.jpg";
import img3 from "../image/3.jpg";
import img4 from "../image/schindler-the-garden-berlin-12.jpg";
import img5 from "../image/b-residents-main2.jpg";
import img6 from "../image/Starbucks-final-front-best.jpg";
import "./styles.css";

function BuildingTypes() {
  return (
    <div className="building-types">
      <div className="img-frame">
        <img className="img" src={img1} alt="#" />
        <h4>Health</h4>
      </div>
      <div className="img-frame">
        <img className="img" src={img2} alt="#" />
        <h4>Education</h4>
      </div>
      <div className="img-frame">
        <img className="img" src={img3} alt="#" />
        <h4> Commercial</h4>
      </div>
      <div className="img-frame">
        <img className="img" src={img4} alt="#" />
        <h4>Residential</h4>
      </div>
      <div className="img-frame">
        <img className="img" src={img5} alt="#" />
        <h4>Industrial</h4>
      </div>
      <div className="img-frame">
        <img className="img" src={img6} alt="#" />
        <h4>Retail</h4>
      </div>
    </div>
  );
}

export default BuildingTypes;

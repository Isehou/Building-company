import React from "react";
import img1 from "./image/1.jpg";
import img2 from "./image/2.jpg";
import img3 from "./image/3.jpg";
import img4 from "./image/4.jpg";
import "./styles.css";

function BuildingTypes() {
  return (
    <div className="building-types">
      <div className="img-frame">
        <h4>Commercial</h4>
        <img className="img" src={img1} alt="#" />
      </div>
      <div className="img-frame">
        <h4>Education</h4>
        <img className="img" src={img2} alt="#" />
      </div>
      <div className="img-frame">
        <h4>Health</h4>
        <img className="img" src={img3} alt="#" />
      </div>
      <div className="img-frame">
        <h4>Industrial</h4>
        <img className="img" src={img4} alt="#" />
      </div>
      <div className="img-frame">
        <h4>Residential</h4>
        <img className="img" src={img2} alt="#" />
      </div>
      <div className="img-frame">
        <h4>Retail</h4>
        <img className="img" src={img3} alt="#" />
      </div>
    </div>
  );
}

export default BuildingTypes;

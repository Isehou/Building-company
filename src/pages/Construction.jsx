import React, { useState, useEffect } from "react";
import "./pagestyle.css";
import BuildingTypes from "../components/BuildingTypes";

function Construction() {
  return (
    <div className="wrapper">
      <div className="construction">
        <div>Construction</div>
        <BuildingTypes></BuildingTypes>
      </div>
    </div>
  );
}

export default Construction;

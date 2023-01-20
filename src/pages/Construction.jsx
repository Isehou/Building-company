import React, { useState, useEffect } from "react";
import "./page-style.css";
import BuildingTypes from "../components/items/BuildingTypesImage";

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

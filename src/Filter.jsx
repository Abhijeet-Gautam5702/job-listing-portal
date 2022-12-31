import React from "react";
import dltIcon from "./assets/close.png";

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter-tag">
        <p className="filter-text">Javascript</p>
        <div className="dlt-filter">
          <img src={dltIcon} alt="dlt" />
        </div>
      </div>
    </div>
  );
}

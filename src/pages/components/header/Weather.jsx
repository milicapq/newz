import React from "react";

export default function Weather() {
  return (
    <div className="weather d-flex">
      <img className="p-2" src="/weather-icon.svg" alt="" />
      <div className="d-flex flex-column p-3">
        <span className="fw-bold">32°C, Cloudy</span>
        <span className="font-color">New York</span>
      </div>
    </div>
  );
}
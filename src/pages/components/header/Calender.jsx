import React from "react";

export default function Calender() {
  return (
    <div className="d-none d-md-block">
      <div className="date d-flex p-2">
        <img className="p-3" src="/calendar-icon.svg" alt="" />
        <div className="d-flex flex-column p-2">
          <span className="fw-bold">Monday,</span>
          <span className="font-color">Nov 25, 2023</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Sticker({ label, children }) {
  return (
    <div className="d-flex align-items-center">
      <div className={children ? "sticker" : "sticker-small"}>
        {children}
        <p className="light-theme fw-bold p-lg-1 my-auto ms-1">{label}</p>
      </div>
    </div>
  );
}

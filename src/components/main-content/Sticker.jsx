import React from "react";

export default function Sticker({ label, children, video }) {
  return (
    <div className="d-flex align-items-center">
      <div
        className={`${children ? "sticker" : "sticker-small"} ${
          video ? "bg-light" : ""
        }`}
      >
        {children}
        <p
          className={`light-theme fw-bold p-lg-1 my-auto ms-1 ${
            video ? "text-primary" : ""
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

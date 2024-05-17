import React from "react";

export default function Ticker() {
  return (
    <div className="marquee ms-3 d-flex">
      <div className="d-flex">
        <span className="px-2">DOW</span>
        <span>31,392.79</span>
        <i className="bi bi-caret-down-fill text-danger ms-2"></i>
        <span className="px-2 caret-down">12,5%</span>
      </div>
      <div className="d-flex bg-dark">
        <span className="px-2">NASDAQ</span>
        <span>12,839.05</span>
        <i className="bi bi-caret-up-fill text-success ms-2"></i>
        <span className="px-2 caret-up">7,12%</span>
      </div>
      <div className="d-flex">
        <span className="px-2">TSLA</span>
        <span>3,689.25</span>
        <i className="bi bi-caret-down-fill text-danger ms-2"></i>
        <span className="px-2 caret-down">0,25%</span>
      </div>
      <div className="d-flex">
        <span className="px-2">TSLA</span>
        <span>3,689.25</span>
        <i className="bi bi-caret-down-fill text-danger ms-2"></i>
        <span className="px-2 caret-down">0,25%</span>
      </div>
    </div>
  );
}

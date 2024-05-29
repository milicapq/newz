import React, { useState } from "react";

export default function Tags(e) {
  const [active, setActive] = useState(null);
  const buttons = [
    "Covid-19",
    "Bitcoin",
    "NFT",
    "Elon Musk",
    "Google Cloud",
    "Crypto",
    "Marketplace",
    "Game Consoles",
    "Robotics",
    "Hackers",
  ];
  const findActive = (button) => {
    setActive(button === active ? null : button);
  };
  return (
    <div className="border-top mt-4 py-4 pointer">
      <span className="fw-bold">HOT TAGS TODAY</span>
      <div className="card rounded-0 mt-4">
        <div className="card-body d-flex flex-wrap">
          {buttons.map((button) => (
            <div
              className={`border m-1 p-1 ${
                active === button ? "bg-dark text-light" : ""
              }`}
              key={button}
              onClick={() => findActive(button)}
            >
              <span>{button} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

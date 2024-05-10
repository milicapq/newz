import React from "react";

export default function Tags() {
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
  return (
    <div className="border-top mt-4 py-3">
      <span>HOT TAGS TODAY</span>
      <div className="card rounded-0 mt-3">
        <div className="card-body d-flex flex-wrap">
          {buttons.map((button) => (
            <div className="border m-1 p-1">
              <span>{button}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

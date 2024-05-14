import React from "react";
import PageNavigation from "./PageNavigation";
import Sticker from "./Sticker";

export default function TreningCardOverlay() {
  return (
    <div className="card text-white bg-transparent rounded-0">
      <img src="/bottom-part-img/chess.png" className="height" alt="..." />
      <div className="card-img-overlay d-flex flex-column justify-content-between">
        <div className="mt-auto">
          <Sticker label={"BUSINESS"} />
          <h5 className="card-title mt-2">Real Estate in California</h5>
        </div>
      </div>
    </div>
  );
}

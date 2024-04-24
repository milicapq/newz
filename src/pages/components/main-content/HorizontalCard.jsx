import React from "react";
import Sticker from "./Sticker";

export default function HorizontalCard({ info }) {
  return (
    <div className="card mb-3 p-2 border-0 border-bottom mt-2 rounded-0 bg-transparent">
      <div className="row g-0">
        <div className="col-md-8">
          <Sticker label={info.label} />
          <div className="card-body p-0 mt-2">
            <h5 className="card-title">{info.title}</h5>
          </div>
        </div>
        <div className="col-md-4">
          <img src={info.img} className="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
  );
}

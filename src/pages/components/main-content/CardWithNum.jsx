import React from "react";
import Sticker from "./Sticker";

export default function CardWithNum({ trending }) {
  return (
    <div className="card mb-3 border-0 border-bottom">
      <div className="row g-0">
        <div className="col-md-4 border-end p-2 m-auto">
          <h1>{trending.num}</h1>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <Sticker label={trending.label} />
            <h5 className="card-title mt-2">{trending.title}</h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

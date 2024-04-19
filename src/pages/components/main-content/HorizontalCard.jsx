import React from "react";
import Sticker from "./Sticker";

export default function HorizontalCard({ info }) {
  return (
    <div class="card mb-3 p-2 border-0 border-bottom">
      <div class="row g-0">
        <div class="col-md-8">
          <Sticker label={info.label} />
          <div class="card-body p-0 mt-2">
            <h5 class="card-title">{info.title}</h5>
          </div>
        </div>
        <div class="col-md-4">
          <img src={info.img} class="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
  );
}

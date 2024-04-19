import React from "react";
import Sticker from "./Sticker";

export default function CardWithNum({ trending }) {
  return (
    <div class="card mb-3 border-0 border-bottom">
      <div class="row g-0">
        <div class="col-md-4 border-end p-2 m-auto">
          <h1>{trending.num}</h1>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <Sticker label={trending.label} />
            <h5 class="card-title mt-2">{trending.title}</h5>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

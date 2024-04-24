import React from "react";
import PageNavigation from "./PageNavigation";
import Sticker from "./Sticker";

export default function TextOverCard() {
  return (
    <div className="card text-white bg-transparent rounded-0">
      <img
        src="/fabcf9f2c97e98130ca320900eb163cb.jpg"
        className="height"
        alt="..."
      />
      <div className="card-img-overlay d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-between">
          <Sticker label={"BUSINESS"} />
          <PageNavigation className={`${"col - 3" && "d - none"} `} />
        </div>

        <div>
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
}

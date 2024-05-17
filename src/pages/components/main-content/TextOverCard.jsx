import React from "react";
import PageNavigation from "./PageNavigation";
import Sticker from "./Sticker";
import { IoPlayCircle } from "react-icons/io5";

export default function TextOverCard() {
  return (
    <div className="card text-white bg-transparent rounded-0">
      <img src="/pic1.png" className="height" alt="..." />
      <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
        <div className="d-flex justify-content-between">
          <Sticker label={"BUSINESS"} />
          <PageNavigation className={`${"col - 3" && "d - none"} `} />
        </div>

        <IoPlayCircle className="m-auto" />
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

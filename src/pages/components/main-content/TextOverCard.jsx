import React from "react";
import PageNavigation from "./PageNavigation";
import Sticker from "./Sticker";
import { Col } from "react-bootstrap";

export default function TextOverCard() {
  return (
    <Col xs={5}>
      <p>LATEST NEWS</p>
      <div class="card text-white rounded-0">
        <img src="/fabcf9f2c97e98130ca320900eb163cb.jpg" alt="..." />
        <div class="card-img-overlay d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between">
            <Sticker label={"BUSINESS"} />
            <PageNavigation className={`${"col - 3" && "d - none"} `} />
          </div>

          <div>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </Col>
  );
}

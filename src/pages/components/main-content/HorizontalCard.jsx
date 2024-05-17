import React from "react";
import Sticker from "./Sticker";
import { Row } from "react-bootstrap";
import DateUserComment from "./DateUserComment";

export default function HorizontalCard({ info, video }) {
  return (
    <div className="card mb-3 p-2 border-0 border-bottom mt-2 rounded-0 bg-transparent">
      <Row className="g-0">
        <div className="col-8">
          <Sticker label={info.label} video={info.video} />
          <div className="card-body p-0 mt-2">
            <h5 className={`${info.video ? "text-light" : ""} fw-bold`}>
              {info.title}
            </h5>
          </div>
        </div>
        <div className="col-4">
          <img src={info.img} className="img-fluid rounded-start" alt="..." />
        </div>
        {!info.video && info.comment ? <DateUserComment /> : ""}
      </Row>
    </div>
  );
}

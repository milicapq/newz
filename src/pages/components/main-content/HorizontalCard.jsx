import React from "react";
import Sticker from "./Sticker";
import { Row, Col } from "react-bootstrap";
import DateUserComment from "./DateUserComment";

export default function HorizontalCard({ info, underline }) {
  return (
    <div className="card mb-3 p-2 border-0 border-bottom mt-2 rounded-0 bg-transparent">
      <Row className="g-0">
        <Col xs={8}>
          <Sticker label={info.label} video={info.video} />
          <div className="card-body p-0 mt-2">
            <h5
              className={`${info.video ? "text-light" : ""} fw-bold ${
                underline && "text-decoration-underline"
              }`}
            >
              {info.title}
            </h5>
          </div>
        </Col>
        <Col xs={4}>
          {info?.img && (
            <img src={info.img} className="img-fluid rounded-start" alt="..." />
          )}
        </Col>
        {!info.video && info.comment ? <DateUserComment newz={info} /> : ""}
      </Row>
    </div>
  );
}

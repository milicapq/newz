import React from "react";
import Sticker from "./Sticker";
import { Row, Col } from "react-bootstrap";
import DateUserComment from "./DateUserComment";

export default function HorizontalCard({ info, underline }) {
  return (
    <div className="card mb-3 pe-4 mt-2 border-0 border-bottom rounded-0 bg-transparent pointer">
      <Row className="g-3">
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
            <img src={info.img} className="img-fluid rounded w-100" alt="..." />
          )}
        </Col>
        {!info.video && info.comments ? <DateUserComment newz={info} /> : ""}
      </Row>
    </div>
  );
}

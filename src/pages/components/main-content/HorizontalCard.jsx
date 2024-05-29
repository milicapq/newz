import React from "react";
import Sticker from "./Sticker";
import { Row, Col } from "react-bootstrap";
import DateUserComment from "./DateUserComment";

export default function HorizontalCard({ info, underline }) {
  return (
    <div
      className={`card border-0 ${
        info.id === "77" ? "border-0" : "border-bottom"
      }  rounded-0 bg-transparent pointer`}
    >
      <Row className="g-2 mb-2">
        <Col className={`${!info.img ? "col-12" : "col-8"}`}>
          <Sticker label={info.label} video={info.video} />
          <div className="card-body p-0 mt-2 pb-3">
            <h5
              className={`${info.video ? "text-light" : ""} fw-bold ${
                underline && "text-decoration-underline"
              }`}
            >
              {info.title}
            </h5>
          </div>
          {!info.video && info.comments ? <DateUserComment newz={info} /> : ""}
        </Col>
        <Col xs={4}>
          {info?.img && (
            <img src={info.img} className="img-fluid w-100" alt="..." />
          )}
        </Col>
      </Row>
    </div>
  );
}

import React from "react";
import Sticker from "./Sticker";
import { Row, Col } from "react-bootstrap";

export default function CardWithNum({ trending }) {
  return (
    <div className="card mb-2 border-0 border-bottom">
      <Row className="g-0">
        <Col md={2} xs={4} className="border-end p-2 m-auto">
          <h1
            className={`${trending?.num == 3 ? "text-dark" : "text-secondary"}`}
          >
            {trending.num}
          </h1>
        </Col>
        <Col md={10} xs={4}>
          <div className="card-body">
            <Sticker label={trending.label} />
            <h5 className="card-title mt-2 fw-bold">{trending.title}</h5>
            <p className="card-text"></p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

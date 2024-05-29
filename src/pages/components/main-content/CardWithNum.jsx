import React from "react";
import Sticker from "./Sticker";
import { Row, Col } from "react-bootstrap";

export default function CardWithNum({ trending }) {
  return (
    <div className="card border-0 border-bottom my-1">
      <Row className="g-0">
        <Col xs={4} md={2} className="border-end py-3 m-auto">
          <h1
            className={`${trending?.num == 3 ? "text-dark" : "text-secondary"}`}
          >
            {trending.num}
          </h1>
        </Col>
        <Col xs={8} md={10}>
          <div className="card-body">
            <Sticker label={trending.label} />
            <h5 className="card-title mt-1 fw-bold">{trending.title}</h5>
            <p className="card-text"></p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

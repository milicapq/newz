import React from "react";
import { LiaEnvelope } from "react-icons/lia";
import { Col, Row } from "react-bootstrap";

export default function SearchHeader() {
  return (
    <Row className="m-1">
      <Col xs={7}>
        <div className="underline d-flex align-items-center mt-4 ms-3">
          <LiaEnvelope />
          <span className="ms-3">SUBSCRIBE</span>
        </div>
      </Col>
      <Col
        xs={4}
        lg={4}
        className="d-flex justify-content-between align-items-center mt-3 mt-lg-1 gap-2"
      >
        <div className="d-flex gap-2 px-3 border-end">
          <i className="bi bi-person"></i>
          <i className="bi bi-bag"></i>
        </div>
        <div>
          <i className="bi bi-search"></i>
        </div>
      </Col>
    </Row>
  );
}

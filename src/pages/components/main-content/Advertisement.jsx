import React from "react";
import { Row, Col } from "react-bootstrap";

export default function Advertisement() {
  return (
    <div className="container p-4 mt-3">
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <img src="/advertisement.png" alt="" />
        </Col>
      </Row>
    </div>
  );
}

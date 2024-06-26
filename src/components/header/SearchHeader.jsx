import React from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "./Modal";

export default function SearchHeader() {
  return (
    <Row className="m-1 pointer">
      <Col xs={7}>
        <div className="d-flex align-items-center mt-2 ms-3">
          <Modal />
        </div>
      </Col>
      <Col
        xs={4}
        lg={4}
        className="d-flex justify-content-between align-items-center gap-2"
      >
        <div className="d-flex gap-2 px-3 border-end">
          <i className="bi bi-person pe-2"></i>
          <i className="bi bi-bag"></i>
        </div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="bi bi-search"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <button className="dropdown-item" type="button">
                <input type="text" placeholder="Search" />
              </button>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  );
}

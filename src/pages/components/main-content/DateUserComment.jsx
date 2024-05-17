import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineInsertComment } from "react-icons/md";

export default function DateUserComment({ newz }) {
  return (
    <Row className="text-muted">
      <Col xs={newz?.id > 2 ? "5" : "4"}>
        <IoCalendarOutline />
        <span className="ms-2">{newz?.date}</span>
      </Col>
      {newz?.id < 3 && (
        <Col xs={3} md={4} className="my-0 py-0">
          <div className="d-flex">
            <GoPerson className="mt-1" />
            <span className="ms-2">By</span>
            <span className="fw-bold">{newz?.writtenBy}</span>
          </div>
        </Col>
      )}
      <Col xs={3} md={4}>
        <div className="d-flex">
          <MdOutlineInsertComment />
          <span className="px-2">{newz?.comments}</span>
          <span> Comments</span>
        </div>
      </Col>
    </Row>
  );
}

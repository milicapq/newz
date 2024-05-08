import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineInsertComment } from "react-icons/md";

export default function DateUserComment({ newz }) {
  return (
    <Row className="text-muted">
      <Col xs={newz?.id > 2 ? "5" : "3"}>
        <IoCalendarOutline />
        <span className="ms-2">{newz?.date}</span>
      </Col>
      {newz?.id < 3 && (
        <Col xs={3} md={4} className="my-0 py-0">
          <GoPerson className="mx-2" />
          <span>{newz?.writtenBy}</span>
        </Col>
      )}
      <Col xs={3} md={4}>
        <MdOutlineInsertComment />
        <span className="px-2">{newz?.comments}</span>
        <span> Comments</span>
      </Col>
      <img src={newz?.img} className="mt-2" alt="" />
    </Row>
  );
}

import React from "react";
import { LiaEnvelope } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscSearch } from "react-icons/vsc";
import { Col, Row } from "react-bootstrap";

export default function SearchHeader() {
  return (
    <Row className="m-1">
      <Col xs={8}>
        <div className="border-bottom d-flex align-items-center mt-4">
          <LiaEnvelope className="" />
          <span className="px-2">SUBSCRIBE</span>
        </div>
      </Col>
      <Col
        xs={4}
        lg={4}
        className="d-flex justify-content-between align-items-center mt-md-3 mt-lg-1"
      >
        <GoPerson />
        <HiOutlineShoppingBag />
        <VscSearch className="ms-2 border-start" />
      </Col>
    </Row>
  );
}

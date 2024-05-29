import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import HorizontalCard from "./HorizontalCard";
import { bottomInfo } from "../../../data/BottomSectionData";
import { SlArrowRight } from "react-icons/sl";

function Column({ cardInfo, horizontalCardInfo }) {
  return (
    <div className="border-end">
      {cardInfo.map((info, index) => (
        <div key={index} className="mb-3">
          <div className="d-flex mt-4">
            <h6 className="mb-4 text-dark">{info?.category}</h6>
            <SlArrowRight className="ms-3 mb-1" />
          </div>
          <Card newz={info} />
        </div>
      ))}
      {horizontalCardInfo.map((info, index) => (
        <div className="pe-4 py-2" key={index}>
          <HorizontalCard info={info} />
        </div>
      ))}
    </div>
  );
}
export default function BottomSection() {
  return (
    <Container>
      <Row className="border-top mt-3">
        {bottomInfo.map((column, index) => (
          <Col md={12} lg={4} className="mt-5" key={index}>
            <Column
              cardInfo={column.cardInfo}
              horizontalCardInfo={column.horizontalCardInfo}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

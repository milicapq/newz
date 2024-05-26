import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import HorizontalCard from "./HorizontalCard";
import { bottomInfo } from "../../../data/BottomSectionData";
import { SlArrowRight } from "react-icons/sl";

function Column({ cardInfo, horizontalCardInfo }) {
  return (
    <div className="border-end">
      {cardInfo.map((info) => (
        <>
          <div className="d-flex mt-4 ms-3" key={info.title}>
            <h6 className="mb-4 text-dark">{info?.category}</h6>
            <SlArrowRight className="ms-3 mb-1" />
          </div>
          <Card newz={info} />
        </>
      ))}
      {horizontalCardInfo.map((info) => (
        <HorizontalCard info={info} key={info.img} />
      ))}
    </div>
  );
}
export default function BottomSection() {
  return (
    <Container>
      <Row className="border-top mt-3">
        {bottomInfo.map((column) => (
          <Col md={12} lg={4} className="mt-5" key={column.id}>
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

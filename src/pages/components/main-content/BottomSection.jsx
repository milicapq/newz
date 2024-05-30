import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import HorizontalCard from "./HorizontalCard";
import { bottomInfo } from "../../../data/BottomSectionData";
import { SlArrowRight } from "react-icons/sl";

function Column({ cardInfo, horizontalCardInfo }) {
  return (
    <div>
      {cardInfo.map((info, index) => (
        <div
          key={index}
          className={`${info?.id == 9 ? "border-0" : "border-end"} `}
        >
          <div className="d-flex mt-4 d-lg-none">
            <h6 className="mb-4 text-dark">{info?.category}</h6>
            <SlArrowRight className="ms-3 mb-1" />
          </div>
          <Card newz={info} />
        </div>
      ))}
      {horizontalCardInfo.map((info, index) => (
        <div
          className={`pe-4 mt-3 ${info?.id >= 10 ? "border-0" : "border-end"}`}
          key={index}
        >
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
        <Col lg={12}>
          <div className="d-none d-lg-block">
            <Row className="d-flex justify-content-between pt-5 pb-3 fw-bold">
              <Col>
                BUSINESS <SlArrowRight className="mb-1" />
              </Col>
              <Col>
                POLITICS <SlArrowRight className="mb-1" />
              </Col>
              <Col>
                MARKET <SlArrowRight className="mb-1" />
              </Col>
            </Row>
          </div>
        </Col>
        {bottomInfo.map((column, index) => (
          <Col md={12} lg={4} className="mt-2" key={index}>
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

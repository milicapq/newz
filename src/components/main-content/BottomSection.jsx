import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import HorizontalCard from "./HorizontalCard";
import { bottomInfo } from "../../data/BottomSectionData";
import { SlArrowRight } from "react-icons/sl";

function Column({ cardInfo = [], horizontalCardInfo = [], isLastColumn }) {
  const lastColumn = isLastColumn ? "" : "border-end";
  return (
    <div className={`${lastColumn} `}>
      {cardInfo.map((info, index) => (
        <div key={index}>
          <div className="d-flex mt-4 d-lg-none">
            <h6 className="mb-4 ms-2 ms-lg-0 text-dark">{info?.category}</h6>
            <SlArrowRight className="ms-3 mb-1" />
          </div>
          <div className="ms-2 ms-lg-0 px-md-2 px-lg-0 pe-md-0">
            <Card newz={info} />
          </div>
        </div>
      ))}
      {horizontalCardInfo.map((info, index) => (
        <div
          className={`px-md-3 px-2 pe-md-4 px-lg-0 pe-lg-4 mt-3`}
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
              isLastColumn={index === bottomInfo.length - 1}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

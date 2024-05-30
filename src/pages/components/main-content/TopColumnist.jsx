import React, { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { columnists } from "../../../data/ColumnistsData";
import { SlArrowRight } from "react-icons/sl";
import PageNavigation from "./PageNavigation";

export default function TopColumnist() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClicks = (e) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    e.preventDefault();
  };

  const handleNextClicks = (e) => {
    if (currentIndex < columnists.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    e.preventDefault();
  };
  return (
    <Container className="mt-5 border-bottom mb-3 border-none">
      <Row className="mb-4">
        <Col xs={10} md={11}>
          <div className="py-2">
            <span className="fw-bold">TOP COLUMNIST</span>
            <SlArrowRight className="ms-3 mb-1" />
          </div>
        </Col>
        <Col xs={2} md={1}>
          <PageNavigation
            handleNextClick={handleNextClicks}
            handlePrevClick={handlePrevClicks}
          />
        </Col>
      </Row>
      <div className="d-none d-lg-block">
        <Row className="mb-5">
          {columnists.slice(currentIndex, currentIndex + 4).map((columnist) => (
            <Col
              lg={3}
              md={4}
              xs={6}
              key={columnist.id}
              className="border-0 border-end pointer"
            >
              <div className="card border-0">
                <div className="card-body d-flex flex-column">
                  <img
                    className="w-25 rounded-circle mb-3"
                    src={columnist.img}
                    alt=""
                  />
                  <h5 className="fw-bold py-2">{columnist.name}</h5>
                  <span className="text-muted">Specialize in</span>
                  <span className="d-flex fw-bold">
                    {columnist.specializeIn}
                  </span>
                  <p className="text-muted mt-3">{columnist.content}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <div className="d-lg-none d-block">
        <Row className="mb-5">
          {columnists.slice(currentIndex, currentIndex + 3).map((columnist) => (
            <Col
              md={4}
              xs={12}
              key={columnist.id}
              className="border-0 border-end pointer"
            >
              <div className="card border-0">
                <div className="card-body d-flex flex-column">
                  <img
                    className="w-25 rounded-circle mb-3"
                    src={columnist.img}
                    alt=""
                  />
                  <h5 className="fw-bold py-2">{columnist.name}</h5>
                  <span className="text-muted">Specialize in</span>
                  <span className="d-flex fw-bold">
                    {columnist.specializeIn}
                  </span>
                  <p className="text-muted mt-3">{columnist.content}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}

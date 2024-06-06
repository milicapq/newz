import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";

export default function MainContent({ news = [] }) {
  return (
    <Container className="mt-5 px-md-0">
      <Row className="mb-4">
        {news.slice(0, 2).map((newz) => (
          <Col md={6} key={newz.id} className="mt-3 mt-md-0">
            <div
              className={`px-md-3 ms-2 ms-md-0 ${
                (newz?.id == 2 && "border-end-0") ||
                (newz.id < 5 && "border-end")
              } `}
            >
              <Card newz={newz} />
            </div>
          </Col>
        ))}
      </Row>
      <Row className="border-top border-bottom pe-md-4">
        {news.slice(2, 5).map((newz) => (
          <Col
            md={6}
            lg={4}
            className={`px-md-4 my-5 px-4 pe-3 pe-md-0 ${
              (newz?.id == 2 && "border-end-0") || (newz.id < 5 && "border-end")
            } `}
            key={newz.title}
          >
            <Card newz={newz} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

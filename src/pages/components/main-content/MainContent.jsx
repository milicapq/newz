import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import { news } from "../../../data/News";

export default function MainContent() {
  return (
    <Container className="mt-4 px-0">
      <Row>
        {news.slice(0, 2).map((newz) => (
          <Col md={6} key={newz.id}>
            <div
              className={`px-3  ${
                (newz?.id == 2 && "border-end-0") ||
                (newz.id < 5 && "border-end")
              } `}
            >
              <Card newz={newz} />
            </div>
          </Col>
        ))}
      </Row>
      <Row>
        {news.slice(2, 5).map((newz) => (
          <Col
            md={6}
            lg={4}
            className={`px-4 border-top ${
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

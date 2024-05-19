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
            <Card newz={newz} />
          </Col>
        ))}
      </Row>
      <Row>
        {news.slice(2, 5).map((newz) => (
          <Col
            md={6}
            lg={4}
            className="border-top border-bottom mt-3"
            key={newz.title}
          >
            <Card newz={newz} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

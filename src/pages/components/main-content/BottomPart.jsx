import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "./Card";

export default function BottomPart() {
  const infos = [
    {
      id: 1,
      labelSticker: "BUSINESS",
      label: "BUSINESS",
      title: "Strategy in business:The mindset of chess",
      content:
        "Russian forces have blown up a bridge linking the embattled Ukranian city of Sieverodonetsk to another city across",
    },
    {
      id: 2,
      label: "BUSINESS",
      title: "Strategy in business:The mindset of chess",
    },
  ];
  return (
    <Container>
      <Row>
        {/* <span>{infos.info.labelSticker}</span> */}
        {infos.map((info) => (
          <Col xs={4} key={info.id}>
            <Card newz={info} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

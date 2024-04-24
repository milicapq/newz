import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function TopColumnist() {
  const columnists = [
    {
      id: 1,
      img: "Untitled1.png",
      name: "Conor Bradley",
      specializeIn: "BUSINESS, NEWS",
      content:
        "My content focus into business politic that allows anyone with a cellphone to scan cultural landmarks",
    },
    {
      id: 2,
      img: "Untitled1.png",
      name: "Luis Diaz",
      specializeIn: "BUSINESS, NEWS",
      content:
        "My content focus into business politic that allows anyone with a cellphone to scan cultural landmarks",
    },
    {
      id: 3,
      img: "Untitled1.png",
      name: "Alberto Moreno",
      specializeIn: "VIDEOS, TECHNOLOGY",
      content:
        "My content focus into business politic that allows anyone with a cellphone to scan cultural landmarks",
    },
    {
      id: 4,
      img: "Untitled1.png",
      name: "Darwin Nunez",
      specializeIn: "ECOMONICS",
      content:
        "My content focus into business politic that allows anyone with a cellphone to scan cultural landmarks",
    },
  ];
  return (
    <Container className="mt-3 border-bottom mb-3">
      <Row className="mb-3">
        <p>Top columnist</p>
        {columnists.map((columnist) => (
          <Col xs={3} key={columnist.id}>
            <Card className="border-0 border-end">
              <div className="card-body d-flex flex-column">
                <img
                  className="w-50 rounded-circle p-1"
                  src={columnist.img}
                  alt=""
                />
                <span>{columnist.name}</span>
                <p className="text-muted">Specialize in</p>
                <span className="d-flex">{columnist.specializeIn}</span>
                <p className="text-muted mt-3">{columnist.content}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

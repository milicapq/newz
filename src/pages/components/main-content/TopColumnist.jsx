import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { columnists } from "../../../data/ColumnistsData";
import { SlArrowRight } from "react-icons/sl";

export default function TopColumnist() {
  return (
    <Container className="mt-3 border-bottom mb-3">
      <Row className="mb-3">
        <div className="py-2">
          <span>TOP COLUMNIST</span>
          <SlArrowRight className="ms-3 mb-1" />
        </div>
        {columnists.map((columnist) => (
          <Col md={3} xs={6} key={columnist.id} className="border-0 border-end">
            <Card className="border-0">
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

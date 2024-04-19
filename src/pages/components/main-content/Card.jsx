import React from "react";
import Sticker from "./Sticker";
import { Row, Col } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";

export default function Card({ newz }) {
  return (
    <div
      className={`card mb-3 border-0 ${
        (newz?.id == 2 && "border-end-0") || (newz.id < 5 && "border-end")
      } `}
    >
      <div className="card-body">
        <Sticker label={newz?.label} />
        <h3 className="fw-bold">{newz.title}</h3>
        <p>{newz.content}</p>
        <Row>
          <Col xs={newz.id > 2 ? "5" : "3"}>
            <img src="/calendar-icon.svg"></img>
            <span className="ms-2">{newz.date}</span>
          </Col>
          {newz.id < 3 && (
            <Col xs={3}>
              <img src="/profile-icon.svg" alt="" />
              <span>{newz.writtenBy}</span>
            </Col>
          )}
          <Col xs={3}>
            <img src="/comment.svg" alt="" />
            <span className="px-2">{newz.comments}</span>
          </Col>
          <img src={newz.img} className="mt-2" alt="" />
        </Row>
      </div>
    </div>
  );
}

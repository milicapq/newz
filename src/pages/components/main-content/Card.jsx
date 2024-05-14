import React from "react";
import Sticker from "./Sticker";
import { Row, Col } from "react-bootstrap";
import DateUserComment from "./DateUserComment";

export default function Card({ newz }) {
  return (
    <div
      className={`card mb-3 border-0 ${
        (newz?.id == 2 && "border-end-0") || (newz.id < 5 && "border-end")
      } `}
    >
      <div className="card-body">
        <div className="d-flex gap-2">
          {newz.live ? (
            <div className="bg-danger text-light px-2 live-circle d-flex align-items-center">
              <span></span>
              <p className="fw-bold m-0 ms-2">LIVE</p>
            </div>
          ) : (
            ""
          )}
          <Sticker label={newz?.label} />
        </div>
        <h3 className="fw-bold mt-3">{newz.title}</h3>
        <p>{newz.content}</p>
        <DateUserComment newz={newz} />
      </div>
      <img src={newz.img} className="mt-2 px-2" alt="" />
    </div>
  );
}

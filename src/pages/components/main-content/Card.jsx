import React from "react";
import Sticker from "./Sticker";
import DateUserComment from "./DateUserComment";

export default function Card({ newz }) {
  return (
    <div
      className={`card pe-2 border-0 pointer ${
        newz.popularPost && "border-bottom pb-2"
      }`}
    >
      <div className="card-body p-0">
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
        {newz.popularPost ? (
          <h5 className="fw-bold my-2">{newz.title}</h5>
        ) : (
          <h3 className="fw-bold my-3">{newz.title}</h3>
        )}
        <p className={`${newz?.id > 2 && "d-none"}`}>{newz.content}</p>
        <DateUserComment newz={newz} />
      </div>
      <img
        src={newz?.img}
        className={`${newz.popularPost ? "pe-0 mb-3" : "pe-3"}`}
        alt=""
      />
    </div>
  );
}

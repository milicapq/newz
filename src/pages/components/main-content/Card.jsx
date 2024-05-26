import React from "react";
import Sticker from "./Sticker";
import DateUserComment from "./DateUserComment";

export default function Card({ newz }) {
  return (
    <div className="card mb-4 mt-4 pe-2 border-0 pointer">
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
        <h3 className="fw-bold my-4">{newz.title}</h3>
        <p className={`${newz?.id > 2 && "d-none"}`}>{newz.content}</p>
        <DateUserComment newz={newz} />
      </div>
      <img src={newz.img} className="mt-2 pe-3 w-100" alt="" />
    </div>
  );
}

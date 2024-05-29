import React from "react";
import { Row, Col } from "react-bootstrap";
import { IoCalendarOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { MdOutlineInsertComment } from "react-icons/md";

export default function DateUserComment({ newz, lightDate }) {
  return (
    <div
      className={` ${
        lightDate ? "text-light" : "text-muted"
      } d-flex gap-4 my-4`}
    >
      <div className={newz?.id > 2 ? "5" : "3"}>
        <IoCalendarOutline className="mb-1" />
        <span className="ms-2">{newz?.date}</span>
      </div>
      {newz?.id < 3 && (
        <div xs={3} md={4} className="my-0 py-0">
          <div className="d-flex">
            <GoPerson className="mt-1" />
            <span className="ms-2">By</span>
            <span className="fw-bold">{newz?.writtenBy}</span>
          </div>
        </div>
      )}
      <div xs={3} md={5}>
        <div className="d-flex">
          <MdOutlineInsertComment className="mt-1" />
          <span className="px-2">{newz?.comments}</span>
          <span className={`${newz?.comment && "d-none"} `}> Comments</span>
        </div>
      </div>
    </div>
  );
}

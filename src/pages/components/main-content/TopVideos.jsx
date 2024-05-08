import React from "react";
import TextOverCard from "./TextOverCard";
import { Row, Col } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import { nextVideos } from "../../../data/NextVideos";
import { SlArrowRight } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function TopVideos() {
  return (
    <div className="container-fluid bg-dark p-3">
      <div className="container py-3">
        <div className="py-2">
          <span className="text-light">TOP VIDEOS LAST WEEK</span>
          <SlArrowRight className="ms-3 mb-1 text-light" />
        </div>
        <Row>
          <Col md={7} className="border-end">
            <TextOverCard />
          </Col>
          <Col md={5}>
            <span className="text-light">VIDEOS UP NEXT</span>
            {nextVideos.map((video) => (
              <HorizontalCard info={video} key={video.label} />
            ))}
            <div className="d-flex align-items-center text-light">
              <span>See all posts</span>
              <MdKeyboardArrowRight />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

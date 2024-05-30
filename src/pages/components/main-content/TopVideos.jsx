import React from "react";
import TextOverCard from "./TextOverCard";
import { Row, Col, Container } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import { nextVideos } from "../../../data/NextVideos";
import { SlArrowRight } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";
import { topVideosOverCard } from "../../../data/TopVideosOverCard";

export default function TopVideos() {
  return (
    <div className="container-fluid bg-dark p-3 py-5">
      <Container className="container py-3">
        <div className="py-4">
          <span className="text-light">TOP VIDEOS LAST WEEK</span>
          <SlArrowRight className="ms-3 mb-1 text-light" />
        </div>
        <Row>
          <Col lg={8} className="border-end">
            <TextOverCard TextOverCardInfo={topVideosOverCard} />
          </Col>
          <Col lg={4} className="px-lg-4 video-underline">
            <p className="text-light ms-2 ms-lg-0 mt-md-4 mt-lg-0">
              VIDEOS UP NEXT
            </p>
            {nextVideos.map((video, index) => (
              <div className="pt-3 pb-1" key={video.label}>
                <HorizontalCard info={video} underline={index === 0} />
              </div>
            ))}
            <div className="d-flex align-items-center text-light mt-2">
              <span>See all posts</span>
              <MdKeyboardArrowRight />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

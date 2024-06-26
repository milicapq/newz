import React from "react";
import TextOverCard from "./TextOverCard";
import { Row, Col, Container } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import { SlArrowRight } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";
import { topVideosOverCard } from "../../data/TopVideosOverCard";

export default function TopVideos({ nextVideos = [] }) {
  return (
    <div className="container-fluid bg-dark p-lg-3 py-lg-5 top-videos">
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
            <p className="text-light ms-md-0 mt-4 mt-lg-0">VIDEOS UP NEXT</p>
            {nextVideos.map((video, index) => (
              <div className="pt-lg-3 pb-lg-1" key={video.label}>
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

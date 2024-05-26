import React from "react";
import TextOverCard from "./TextOverCard";
import { Row, Col, Container } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import { nextVideos } from "../../../data/NextVideos";
import { SlArrowRight } from "react-icons/sl";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function TopVideos() {
  return (
    <div className="container-fluid bg-dark p-3">
      <Container className="container py-3">
        <div className="py-2">
          <span className="text-light">TOP VIDEOS LAST WEEK</span>
          <SlArrowRight className="ms-3 mb-1 text-light" />
        </div>
        <Row>
          <Col lg={8} className="border-end">
            <TextOverCard />
          </Col>
          <Col lg={4} className="px-lg-4 video-underline">
            <p className="text-light ms-2 mt-md-4">VIDEOS UP NEXT</p>
            {nextVideos.map((video, index) => (
              <HorizontalCard
                info={video}
                key={video.label}
                underline={index === 0}
              />
            ))}
            <div className="d-flex align-items-center text-light">
              <span className="ms-1 mt-5">See all posts</span>
              <MdKeyboardArrowRight className="mt-5" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import TextOverCard from "./TextOverCard";
import CardWithNum from "./CardWithNum";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";

export default function LatestNews({ infos = [], trendingNews = [] }) {
  return (
    <Container className="border-top mt-4">
      <Row className="mt-4">
        <Col md={5}>
          <div className="d-flex">
            <p className="fw-bold">LATEST NEWS</p>
            <SlArrowRight className="mt-1 ms-3" />
          </div>
          <TextOverCard />
        </Col>
        <Col md={4} className="mt-4 border-end">
          {infos.map((info) => (
            <HorizontalCard info={info} />
          ))}
          <div className="d-flex align-items-center text-muted">
            <span>See all posts</span>
            <MdKeyboardArrowRight />
          </div>
        </Col>

        <Col md={3}>
          <p className="fw-bold">TRENDING POSTS</p>
          {trendingNews.map((trending) => (
            <CardWithNum trending={trending} />
          ))}
          <div className="d-flex align-items-center text-muted">
            <span>See all posts</span>
            <MdKeyboardArrowRight />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

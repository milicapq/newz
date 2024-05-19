import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import TextOverCard from "./TextOverCard";
import CardWithNum from "./CardWithNum";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import TreningCardOverlay from "./TrendingCardOverlay";

export default function LatestNews({ infos = [], trendingNews = [] }) {
  return (
    <Container className="border-top mt-3">
      <Row className="mt-5">
        <Col lg={5}>
          <div className="d-flex">
            <p className="fw-bold">LATEST NEWS</p>
            <SlArrowRight className="mt-1 ms-3" />
          </div>
          <TextOverCard />
        </Col>
        <Col lg={4} md={6} className="mt-4 border-end">
          {infos.map((info) => (
            <HorizontalCard info={info} />
          ))}
          <div className="d-flex align-items-center text-muted">
            <span>See all posts</span>
            <MdKeyboardArrowRight />
          </div>
        </Col>

        <Col lg={3} md={6}>
          <p className="fw-bold">TRENDING POSTS</p>
          <TreningCardOverlay />
          {trendingNews.map((trending) => (
            <CardWithNum trending={trending} key={trending.content} />
          ))}
          <div className="d-flex align-items-center text-muted mt-4">
            <span>See all posts</span>
            <MdKeyboardArrowRight />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

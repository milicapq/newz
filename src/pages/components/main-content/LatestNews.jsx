import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import TextOverCard from "./TextOverCard";
import CardWithNum from "./CardWithNum";
import { MdKeyboardArrowRight } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import TrendingCardOverlay from "./TrendingCardOverlay";
import { TextOverCardInfo } from "../../../data/TextOverCardData";

export default function LatestNews({ infos = [], trendingNews = [] }) {
  return (
    <Container className="border-top py-4 mt-3">
      <Row className="mt-5">
        <Col lg={5}>
          <div className="d-flex">
            <p className="fw-bold pb-3">LATEST NEWS</p>
            <SlArrowRight className="mt-1 ms-3" />
          </div>
          <TextOverCard latestNews={true} TextOverCardInfo={TextOverCardInfo} />
        </Col>
        <Col lg={4} md={6} className="pt-5 px-4">
          {infos.map((info) => (
            <div className="py-2" key={info.img}>
              <HorizontalCard info={info} />
            </div>
          ))}
          <div className="d-flex align-items-center text-muted pt-4">
            <span>See all posts</span>
            <MdKeyboardArrowRight />
          </div>
        </Col>
        <Col lg={3} md={6} className="border-start ps-4">
          <p className="fw-bold">TRENDING POSTS</p>
          <div className="pt-3">
            <TrendingCardOverlay />
          </div>
          {trendingNews.map((trending, index) => (
            <CardWithNum trending={trending} key={index} />
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

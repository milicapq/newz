import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";
import TextOverCard from "./TextOverCard";
import CardWithNum from "./CardWithNum";

export default function LatestNews() {
  const infos = [
    {
      title: "Norway exempts visas for visitors from Eu",
      img: "/pic1.png",
      label: "NEWS",
    },
    {
      title: "DOW like a bull",
      img: "/pic1.png",
      label: "MARKET",
    },
    {
      title: "Sadabell ATM become popular in Ohio",
      img: "/pic1.png",
      label: "POLITICS",
    },
    {
      title: "US accuses Russia of currency manipulation",
      img: "/pic1.png",
      label: "MARKET",
    },
  ];
  const trendingNews = [
    {
      id: "3",
      title: "Elon Musk got Twitter because he gets Twitter",
      label: "NEWS",
      num: 2,
    },
    {
      id: "4",
      title: "US. Stock Market today",
      label: "MARKET",
      num: 3,
    },
    {
      id: "5",
      title: "Tiktok will win Facebook?",
      label: "TECHNOLOGY",
      num: 4,
    },
  ];
  return (
    <Container className="border-top mt-4">
      <Row className="mt-4">
        <Col md={5}>
          <p>LATEST NEWS</p>
          <TextOverCard />
        </Col>
        <Col md={4} className="mt-4 border-end">
          {infos.map((info) => (
            <HorizontalCard info={info} />
          ))}
          <div className="d-flex align-items-center">
            <span className="text-muted">See all posts</span>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </Col>

        <Col md={3}>
          <p>TRENDING POSTS</p>
          {trendingNews.map((trending) => (
            <CardWithNum trending={trending} />
          ))}
          <div className="d-flex align-items-center">
            <span className="text-muted">See all posts</span>
            <img src="/arrow-right.svg" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

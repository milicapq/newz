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
      title: "Elon Musk got Twitter because he gets Twitter",
      label: "NEWS",
      num: 2,
    },
    {
      title: "US. Stock Market today",
      label: "MARKET",
      num: 3,
    },
    {
      title: "Tiktok will win Facebook?",
      label: "TECHNOLOGY",
      num: 4,
    },
  ];
  return (
    <Container className="border-top mt-4">
      <Row className="mt-4">
        <TextOverCard />
        <Col xs={4} className="mt-4 border-end">
          {infos.map((info) => (
            <HorizontalCard info={info} />
          ))}
        </Col>
        <Col xs={3}>
          <p>TRENDING POSTS</p>
          {/* <TextOverCard /> */}
          {trendingNews.map((trending) => (
            <CardWithNum trending={trending} />
          ))}
          <p>See all posts</p>
        </Col>
      </Row>
    </Container>
  );
}

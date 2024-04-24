import React from "react";
import TextOverCard from "./TextOverCard";
import { Row, Col } from "react-bootstrap";
import HorizontalCard from "./HorizontalCard";

export default function TopVideos() {
  const infos = [
    {
      label: "NEWS",
      title: "Strategy marketing of Fedex Inc",
      img: "pic1.png",
    },
    {
      label: "BUSINESS",
      title: "Strategy marketing of Fedex Inc",
      img: "pic1.png",
    },
    {
      label: "VIDEOS",
      title: "Strategy marketing of Fedex Inc",
      img: "pic1.png",
    },
    {
      label: "MARKET",
      title: "Strategy marketing of Fedex Inc",
      img: "pic1.png",
    },
  ];
  return (
    <div className="container-fluid bg-dark">
      <div className="container">
        <div className="py-2">
          <span className="text-light">TOP VIDEOS LAST WEEK</span>
          <img src="/arrow-right.svg" alt="" />
        </div>
        <Row>
          <Col xs={8} className="border-end">
            <TextOverCard />
          </Col>
          <Col xs={4}>
            <span className="text-light">VIDEOS UP NEXT</span>
            {infos.map((info) => (
              <HorizontalCard info={info} key={info.label} />
            ))}
            <div className="d-flex align-items-center">
              <span className="text-light">See all posts</span>
              <img src="/arrow-right.svg" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

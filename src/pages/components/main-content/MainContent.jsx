import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "./Card";

export default function MainContent() {
  const news = [
    {
      id: 1,
      label: "NEWS",
      title: "Biden asks Congress for $33 billion to support Ukraine",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "Dec 14,2022",
      writtenBy: "Admin",
      comments: 55,
      img: "/pic1.png",
    },
    {
      id: 2,
      label: "POLITICS",
      title: "Putin 'preparing to starve' parts of developing world",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "Dec 14,2022",
      writtenBy: "Admin",
      comments: 55,
      img: "/pic2.png",
    },
    {
      id: 3,
      label: "POLITICS",
      title: "Biden asks Congress for $33 billion to support Ukraine",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "Dec 14,2022",
      writtenBy: "Admin",
      comments: 55,
      img: "/pic1.png",
    },
    {
      id: 4,
      label: "MARKET",
      title: "Biden asks Congress for $33 billion to support Ukraine",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "Dec 14,2022",
      writtenBy: "Admin",
      comments: 55,
      img: "/pic1.png",
    },
    {
      id: 5,
      label: "ECONOMIC",
      title: "Biden asks Congress for $33 billion to support Ukraine",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industrys standard dummytext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      date: "Dec 14,2022",
      writtenBy: "Admin",
      comments: 55,
      img: "/pic2.png",
    },
  ];
  return (
    <div className="container mt-4 p-3">
      <Row>
        {news.slice(0, 2).map((newz) => (
          <Col xs={6} key={newz.id}>
            <Card newz={newz} />
          </Col>
        ))}
      </Row>
      <Row>
        {news.slice(2, 5).map((newz) => (
          <Col xs={4} className="border-top border-bottom mt-3" key={newz.id}>
            <Card newz={newz} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

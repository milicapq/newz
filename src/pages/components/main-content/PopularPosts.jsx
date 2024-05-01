import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import RecentlyPosts from "./RecentlyPosts";
import TextOverCard from "./TextOverCard";
import SmallAdvertisement from "./SmallAdvertisement";

export default function PopularPosts() {
  const popularPosts = [
    {
      id: "3",
      label: "MARKET",
      title: "US Stock Market last week, Nike hit near 40%",
      date: "Dec 14,2022",
      comment: 4,
      img: "/pic1.png",
    },
    {
      id: "4",
      label: "MARKET",
      title: "Joe Biden did not participate in the war",
      date: "Dec 14,2022",
      comment: 4,
      img: "/pic1.png",
    },
    {
      id: "5",
      label: "MARKET",
      title: "US Stock Market last week, Nike hit near 40%",
      date: "Dec 14,2022",
      comment: 4,
      img: "/pic1.png",
    },
  ];
  const buttons = [
    "Covid-19",
    "Bitcoin",
    "NFT",
    "Elon Musk",
    "Google Cloud",
    "Crypto",
    "Marketplace",
    "Game Consoles",
    "Robotics",
    "Hackers",
  ];

  return (
    <Container className="mt-3 border-top">
      <Row>
        <Col md={4} className="mt-4 border-end">
          <span>POPULAR POSTS</span>
          {popularPosts.map((newz) => (
            <Card newz={newz} />
          ))}
        </Col>
        <Col md={5} className="mt-4 border-end">
          <span> RECENTLY POSTS</span>
          <RecentlyPosts />
          <span>LATEST NEWS</span>
          <TextOverCard />
        </Col>
        <Col md={3} className="mt-4 border-start">
          <span>STAY CONNECTED</span>
          <div className="card rounded-0 mt-3">
            <div className="card-body">
              <div className="border-bottom p-2">
                <img
                  src="/facebook-icon-blue.svg"
                  className="border-end p-2"
                  alt=""
                />
                <span className="p-2">575,5K</span>
                <span>Followers</span>
              </div>
            </div>
            <div className="card-body">
              <div className="border-bottom p-2">
                <img
                  src="/twitter-icon-blue.svg"
                  className="border-end p-2"
                  alt=""
                />
                <span className="p-2">215,7K</span>
                <span>Followers</span>
              </div>
            </div>
            <div className="card-body">
              <div className="border-bottom p-2">
                <img
                  src="/instagram-icon-color.svg"
                  className="border-end p-2"
                  alt=""
                />
                <span className="p-2">98,2K</span>
                <span>Followers</span>
              </div>
            </div>
            <div className="card-body">
              <div className="p-2">
                <img
                  src="/youtube-icon-red.svg"
                  className="border-end p-2"
                  alt=""
                />
                <span className="p-2">242K</span>
                <span>Followers</span>
              </div>
            </div>
          </div>
          <div className="border-top mt-4 py-3">
            <span>HOT TAGS TODAY</span>
            <div className="card rounded-0 mt-3">
              <div className="card-body d-flex flex-wrap">
                {buttons.map((button) => (
                  <div className="border m-1 p-1">
                    <span>{button}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <SmallAdvertisement />
          <div className="mt-3 border-top py-3">
            <span>GOOGLE WEB STORIES</span>
            <div className="border-bottom p-2">
              <img
                className="w-25 rounded-circle p-1 border border-danger"
                src="/Untitled1.png"
                alt=""
              />
              <span className="px-3">Kayak stories</span>
            </div>
            <div className="border-bottom p-2">
              <img
                className="w-25 rounded-circle p-1 border border-danger"
                src="/Untitled1.png"
                alt=""
              />
              <span className="px-3">6 Tips Successful</span>
            </div>
            <div className="border-bottom p-2">
              <img
                className="w-25 rounded-circle p-1 border border-danger"
                src="/Untitled1.png"
                alt=""
              />
              <span className="px-3">PS Controller</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

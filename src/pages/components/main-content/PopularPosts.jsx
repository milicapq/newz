import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import RecentlyPosts from "./RecentlyPosts";
import TextOverCard from "./TextOverCard";
import SmallAdvertisement from "./SmallAdvertisement";
import { popularPosts } from "../../../data/PopularPostsData";
import WebStories from "./WebStories";
import Tags from "./Tags";

export default function PopularPosts() {
  return (
    <Container className="mt-3 border-top">
      <Row>
        <Col lg={4} md={6} className="mt-4 border-end">
          <span>POPULAR POSTS</span>
          {popularPosts.map((newz) => (
            <Card newz={newz} />
          ))}
        </Col>
        <Col lg={5} md={6} className="mt-4 border-end">
          <span> RECENTLY POSTS</span>
          <RecentlyPosts />
          <span>LATEST NEWS</span>
          <TextOverCard />
        </Col>
        <Col lg={3} md={12} className="mt-4 border-start">
          <Row>
            <Col md={6} lg={12}>
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
            </Col>
            <Col md={6} lg={12}>
              <Tags />
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={12}>
              <SmallAdvertisement />
            </Col>
            <Col md={6} lg={12}>
              <WebStories />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

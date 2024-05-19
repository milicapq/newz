import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import TextOverCard from "./TextOverCard";
import SmallAdvertisement from "./SmallAdvertisement";
import { popularPosts } from "../../../data/PopularPostsData";
import WebStories from "./WebStories";
import Tags from "./Tags";
import HorizontalCard from "./HorizontalCard";
import { recentlyPosts } from "../../../data/RecentlyPostsData";

export default function PopularPosts() {
  return (
    <Container className="mt-4 border-top px-0">
      <Row>
        <Col lg={4} md={6} className="mt-4 border-end">
          <span className="ms-3">POPULAR POSTS</span>
          {popularPosts.map((newz) => (
            <Card newz={newz} key={newz.content} />
          ))}
        </Col>
        <Col lg={5} md={6} className="mt-4 border-end px-4">
          <span> RECENTLY POSTS</span>
          {recentlyPosts.slice(0, 3).map((post) => (
            <HorizontalCard info={post} key={post.comment} />
          ))}
          <TextOverCard />
          {recentlyPosts.slice(3, 5).map((posts) => (
            <HorizontalCard info={posts} key={posts.comment} />
          ))}
        </Col>
        <Col lg={3} md={12} className="mt-4 border-start px-4">
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

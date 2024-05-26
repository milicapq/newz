import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import TextOverCard from "./TextOverCard";
import SmallAdvertisement from "./SmallAdvertisement";
import { popularPosts } from "../../../data/PopularPostsData";
import WebStories from "./WebStories";
import Tags from "./Tags";
import HorizontalCard from "./HorizontalCard";
import { recentlyPosts } from "../../../data/RecentlyPostsData";
import SocialMediaFollowers from "./SocialMediaFollowers";

export default function PopularPosts() {
  const inform = [
    {
      img: "/pic1.png",
      title: "Forbes #3: Top 10 Businessman NYC",
      content:
        "Its first decline in subscribers since 2011 triggered a $54 billion stock value loss and [...]",
      date: "dec 24, 2022",
      comments: 12,
    },
    {
      img: "/pic2.png",
      title: "Forbes #3: Top 12 Businessman NYC",
      content:
        "Its first decline in subscribers since 2011 triggered a $54 billion stock value loss and [...]",
      date: "dec 24, 2022",
      comments: 12,
    },
  ];
  return (
    <Container className="mt-4 border-top px-0">
      <Row>
        <Col lg={3} md={6} className="mt-4 border-end">
          <span>POPULAR POSTS</span>
          {popularPosts.map((newz) => (
            <Card newz={newz} key={newz.content} />
          ))}
          <img src="/popular-posts-img/advertisment1.png" alt="" />
        </Col>
        <Col lg={6} md={6} className="mt-4 border-end px-4">
          <span> RECENTLY POSTS</span>
          {recentlyPosts.slice(0, 3).map((post) => (
            <div className="mt-4">
              <HorizontalCard info={post} key={post.comments} />
            </div>
          ))}
          <TextOverCard />
          {recentlyPosts.slice(3, 5).map((posts) => (
            <HorizontalCard info={posts} key={posts.comments} />
          ))}
        </Col>
        <Col lg={3} md={12} className="mt-4 border-start px-4">
          <Row>
            <Col md={6} lg={12} className="pointer">
              <span>STAY CONNECTED</span>
              <SocialMediaFollowers />
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

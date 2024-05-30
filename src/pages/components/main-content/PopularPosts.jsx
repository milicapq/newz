import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import TextOverCard from "./TextOverCard";
import SmallAdvertisement from "./SmallAdvertisement";
import {
  popularPosts,
  popularPostsOverCard,
} from "../../../data/PopularPostsData";
import WebStories from "./WebStories";
import Tags from "./Tags";
import HorizontalCard from "./HorizontalCard";
import { recentlyPosts } from "../../../data/RecentlyPostsData";
import SocialMediaFollowers from "./SocialMediaFollowers";
import { RecentlyPostsTextOver } from "../../../data/RecentlyPostsTextOverData";
import { TextOverCardInfo } from "../../../data/TextOverCardData";

export default function PopularPosts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrevClick = (e) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      e.preventDefault();
    }
  };

  const handleNextClick = (e) => {
    if (currentIndex < RecentlyPostsTextOver.length - 1) {
      setCurrentIndex(currentIndex + 1);
      e.preventDefault();
    }
  };
  return (
    <Container className="border-top px-0 py-2 mb-3">
      <Row className="mt-4">
        <Col lg={3} md={6} className="mt-2 border-end">
          <span className="fw-bold">POPULAR POSTS</span>
          {popularPosts.map((newz, index) => (
            <div className="mt-4" key={index}>
              <Card newz={newz} />
            </div>
          ))}
          <img
            src="/popular-posts-img/advertisment1.png"
            className="mt-4"
            alt=""
          />
        </Col>
        <Col lg={6} md={6} className="mt-2 border-end px-4">
          <span className="fw-bold"> RECENTLY POSTS</span>
          {recentlyPosts.slice(0, 3).map((post) => (
            <div className="mt-4" key={post.id}>
              <HorizontalCard info={post} />
            </div>
          ))}
          <div className="mt-5 border-bottom pb-4">
            <TextOverCard
              TextOverCardInfo={popularPostsOverCard}
              handleNextClick={handleNextClick}
              handlePrevClick={handlePrevClick}
            />
          </div>
          {recentlyPosts.slice(3, 5).map((posts, index) => (
            <div className="pt-4" key={index}>
              <HorizontalCard info={posts} />
            </div>
          ))}
        </Col>
        <Col lg={3} md={12} className="mt-2 border-start px-4">
          <Row>
            <Col md={6} lg={12} className="pointer">
              <span className="fw-bold">STAY CONNECTED</span>
              <SocialMediaFollowers />
            </Col>
            <Col md={6} lg={12} className="py-4">
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

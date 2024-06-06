import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Card from "./Card";
import TextOverCard from "./TextOverCard";
import SmallAdvertisement from "./SmallAdvertisement";
import {
  popularPosts,
  popularPostsOverCard,
} from "../../data/PopularPostsData";
import WebStories from "./WebStories";
import Tags from "./Tags";
import HorizontalCard from "./HorizontalCard";
import SocialMediaFollowers from "./SocialMediaFollowers";
import { RecentlyPostsTextOver } from "../../data/RecentlyPostsTextOverData";

export default function PopularPosts({
  popularPosts = [],
  recentlyPosts = [],
}) {
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
    <Container className="border-top px-lg-0 py-2 mb-3">
      <Row className="mt-4">
        <Col lg={3} md={6} className="mt-2 border-end">
          <span className="fw-bold ms-2 ms-md-0">POPULAR POSTS</span>
          {popularPosts.map((newz, index) => (
            <div className="mt-4 px-1 ms-2 px-md-0 ms-md-0" key={index}>
              <Card newz={newz} />
            </div>
          ))}
          <img
            src="/popular-posts-img/advertisment1.png"
            className="mt-4 px-2 ms-md-0 ms-4"
            alt="Popular post image"
          />
        </Col>
        <Col lg={6} md={6} className="mt-md-2 mt-3 border-end px-4">
          <p className="fw-bold mt-3 mt-md-0"> RECENTLY POSTS</p>
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
        <Col
          lg={3}
          md={12}
          className="mt-2 border-start px-4 borders border-none"
        >
          <Row>
            <Col md={6} lg={12} className="pointer">
              <p className="fw-bold mt-md-3 mt-lg-0">STAY CONNECTED</p>
              <SocialMediaFollowers />
            </Col>
            <Col md={6} lg={12} className="py-lg-4">
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

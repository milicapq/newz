import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";
import FooterInfo from "./FooterInfo";
import FooterInput from "./FooterInput";

export default function Footer() {
  const topics = [
    "News",
    "Business",
    "Tech",
    "Politics",
    "Economy",
    "Market",
    "Video",
  ];
  const help = ["About", "Contact", "Advertise", "Career", "Policy", "FAQ"];
  return (
    <div className="container-fluid bg-primary text-light">
      <Container>
        <Row className="py-4">
          <Col lg={5} xs={12} md={4} className="py-4">
            <FooterInfo />
          </Col>
          <Col xs={4} md={2} className="py-4" key={topics}>
            <h5 className="mb-2 fw-bold">Topics</h5>
            {topics.map((topic) => (
              <p className="mt-4">{topic}</p>
            ))}
          </Col>
          <Col xs={4} md={2} lg={2} className="py-4" key={help}>
            <h5 className="mb-2 fw-bold">Help</h5>
            {help.map((item) => (
              <p className="mt-4">{item}</p>
            ))}
          </Col>
          <Col xs={12} lg={3} md={12} className="py-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="mt-4">
              Register now to get latest updates on promotions & coupons.
            </p>
            <FooterInput />
            <p className="mt-3 fst-italic">
              By subscribing, you accepted our Policy
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={3}>
            <img className="me-4" src="/logo-dark.png" alt="" />
          </Col>
          <Col lg={7} xs={6} md={8} className="mt-3">
            <span>© 2022 Copyrights by Newz. All Rights Reserved.</span>
          </Col>
          <Col xs={6} md={3} lg={2} className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <img className="flag rounded-circle" src="/flag-usa.png" alt="" />
              <div className="btn-group">
                <button
                  type="button"
                  className="btn text-light"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  English
                  <IoIosArrowUp className="ms-1" />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

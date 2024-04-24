import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LuSendHorizonal } from "react-icons/lu";

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
    <div className="container-fluid bg-dark text-light">
      <Container>
        <Row className="py-4">
          <Col xs={5} className="py-4">
            <h5 className="fw-bold mb-3">Newz - Business Magazine</h5>
            <div className="d-flex mb-2 mt-4">
              <img src="/house.svg" alt="" />
              <span className="px-3">223 Orcaard St, Manhattan, NY 032</span>
            </div>
            <div className="d-flex mb-2">
              <img src="telephone.svg" alt="" />
              <span className="px-3">+031 5689 89 98</span>
            </div>
            <div className="d-flex">
              <img src="envelope-icon-light.svg" alt="" />
              <span className="px-3">technology@newz.com</span>
            </div>
          </Col>
          <Col xs={2} className="py-4" key={topics}>
            <h5 className="mb-2 fw-bold">Topics</h5>
            {topics.map((topic) => (
              <p className="mt-4">{topic}</p>
            ))}
          </Col>
          <Col xs={2} className="py-4" key={help}>
            <h5 className="mb-2 fw-bold">Help</h5>
            {help.map((item) => (
              <p className="mt-4">{item}</p>
            ))}
          </Col>
          <Col xs={3} className="py-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="mt-4">
              Register now to get latest updates on promotions & coupons.
            </p>
            <div className="bg-primary rounded-pill p-1 d-flex align-items-center justify-content-between">
              <img src="envelope-icon-light.svg" className="p-2" alt="" />
              <input
                type="text"
                className="rounded-pill text-light bg-primary border-0"
                name=""
                placeholder="Enter your email"
                id=""
              />
              <div className="bg-light rounded-circle">
                <LuSendHorizonal />
              </div>
            </div>
            <p className="mt-3 fst-italic">
              By subscribing, you accepted our Policy
            </p>
          </Col>
          <Col xs={12}>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <img className="me-4" src="/logo-dark.png" alt="" />
                <span className="mt-3 ms-4">
                  © 2022 Copyrights by Newz. All Rights Reserved.
                </span>
              </div>
              <div className="d-flex align-items-center">
                <img
                  className="flag rounded-circle"
                  src="/flag-usa.png"
                  alt=""
                />
                <div class="btn-group dropup">
                  <button
                    type="button"
                    className="btn dropdown-toggle text-light"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    English
                  </button>
                  <div class="dropdown-menu"></div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

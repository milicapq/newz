import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LuSendHorizonal } from "react-icons/lu";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

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
          <Col lg={5} xs={12} className="py-4">
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
            <div className="mt-4 d-flex gap-2">
              <div className="rounded-circle circle border border-light d-flex align-items-center justify-content-center">
                <CiTwitter />
              </div>
              <div className="rounded-circle circle bg-transparent border border-light d-flex align-items-center justify-content-center">
                <SlSocialFacebook />
              </div>
              <div className="rounded-circle circle bg-transparent border border-light d-flex align-items-center justify-content-center">
                <FaInstagram />
              </div>
              <div className="rounded-circle circle bg-transparent border border-light d-flex align-items-center justify-content-center">
                <FiYoutube />
              </div>
            </div>
          </Col>
          <Col xs={4} md={2} className="py-4" key={topics}>
            <h5 className="mb-2 fw-bold">Topics</h5>
            {topics.map((topic) => (
              <p className="mt-4">{topic}</p>
            ))}
          </Col>
          <Col xs={4} md={2} className="py-4" key={help}>
            <h5 className="mb-2 fw-bold">Help</h5>
            {help.map((item) => (
              <p className="mt-4">{item}</p>
            ))}
          </Col>
          <Col xs={4} md={3} className="py-4">
            <h5 className="fw-bold">Newsletter</h5>
            <p className="mt-4">
              Register now to get latest updates on promotions & coupons.
            </p>
            <div className="bg-primary rounded-pill p-1 d-flex align-items-center justify-content-between">
              <img src="envelope-icon-light.svg" className="p-2 ms-2" alt="" />
              <input
                type="text"
                className="rounded-pill text-light bg-primary border-0"
                name=""
                placeholder="Enter your email"
                id=""
              />
              <div className="bg-light rounded-circle p-2 send-icon">
                <LuSendHorizonal className="text-dark m-2" />
              </div>
            </div>
            <p className="mt-3 fst-italic">
              By subscribing, you accepted our Policy
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={2} md={3}>
            <img className="me-4" src="/logo-dark.png" alt="" />
          </Col>
          <Col md={7} xs={5} className="mt-3">
            <span>© 2022 Copyrights by Newz. All Rights Reserved.</span>
          </Col>
          <Col xs={4} md={2} className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              <img className="flag rounded-circle" src="/flag-usa.png" alt="" />
              <div class="btn-group">
                <button
                  type="button"
                  className="btn text-light"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  English
                  <MdOutlineKeyboardArrowUp />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

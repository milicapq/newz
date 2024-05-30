import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FooterInfo from "./FooterInfo";
import FooterInput from "./FooterInput";

export default function Footer() {
  const [currentFlag, setCurrentFlag] = useState("English");
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
  const flags = [
    { language1: "English", image: "/footer-img/flag-usa.png" },
    { language1: "French", image: "/footer-img/france.png" },
    { language1: "Germany", image: "/footer-img/germany.png" },
  ];

  const handleChange = (e) => {
    setCurrentFlag(e.target.value);
  };

  const changeFlags = flags.find((flag) => flag.language1 === currentFlag);

  return (
    <div className="container-fluid bg-primary text-light mt-5">
      <Container className="py-5">
        <Row className="py-4">
          <Col lg={5} xs={12} md={4} className="py-4">
            <FooterInfo />
          </Col>
          <Col xs={4} md={2} className="py-4">
            <h3 className="mb-2 fw-bold pointer pb-3">Topics</h3>
            {topics.map((topic, index) => (
              <h6 className="mt-4 pointer" key={index}>
                {topic}
              </h6>
            ))}
          </Col>
          <Col xs={4} md={2} lg={2} className="py-4">
            <h3 className="pb-3 fw-bold pointer">Help</h3>
            {help.map((item, index) => (
              <h6 className="mt-4 pointer" key={index}>
                {item}
              </h6>
            ))}
          </Col>
          <Col xs={12} lg={3} md={12} className="py-4">
            <h3 className="fw-bold pointer pb-3">Newsletter</h3>
            <p className="my-4 pointer">
              Register now to get latest updates on promotions & coupons.
            </p>
            <FooterInput />
            <span className="fst-italic d-flex justify-content-center mt-4">
              By subscribing, you accepted our
              <a className="nav-link mb-2 p-0" href="#">
                <span className="border-bottom fst-normal ms-1">Policy</span>
              </a>
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} lg={3}>
            <img className="me-4 pointer" src="/logo-dark.png" alt="" />
          </Col>
          <Col lg={7} xs={6} md={8} className="mt-3 pointer">
            <span>
              © 2022 Copyrights by <span className="fw-bold">Newz</span>. All
              Rights Reserved.
            </span>
          </Col>
          <Col xs={6} md={3} lg={2} className="d-flex justify-content-end">
            <div className="d-flex align-items-center">
              {changeFlags && (
                <img
                  className="flag rounded-circle me-2"
                  src={changeFlags.image}
                  alt=""
                />
              )}
              <select
                className="bg-primary border-0 text-light"
                aria-label="Default select example"
                value={currentFlag}
                onChange={handleChange}
              >
                {flags.map((language, index) => (
                  <option key={index} value={language.language1}>
                    {language.language1.charAt(0) + language.language1.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

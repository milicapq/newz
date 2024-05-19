import React from "react";
import Ticker from "./Ticker";
import Calender from "./Calender";
import Weather from "./Weather";
import Navbar from "./Navbar";
import HeaderIcons from "./HeaderIcons";
import { Col, Container, Row } from "react-bootstrap";
import TabletMobileNav from "./TabletMobileNav";
import SearchHeader from "./SearchHeader";

export default function Header() {
  return (
    <div className="header">
      <div className="container-fluid bg-primary d-flex justify-content-center align-items-center d-xs-none">
        <Container>
          <Row>
            <Col lg={2} className="d-flex align-items-center">
              <h6 className="mt-1">Market Data Today</h6>
            </Col>
            <Col lg={10}>
              <Ticker />
            </Col>
          </Row>
        </Container>
      </div>
      <TabletMobileNav className="d-lg-none" />
      <Container className="p-3 d-md-none d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <Row>
            <Col xs={4}>
              <img className="p-1" src="/Untitled.png" alt="" />
            </Col>
            <Col xs={4}>
              <Calender />
            </Col>
            <Col xs={4}>
              <Weather />
            </Col>
          </Row>
          <SearchHeader />
        </div>
        <div className="d-flex justify-content-between w-100 border-bottom">
          <Navbar />
          <HeaderIcons />
        </div>
      </Container>
    </div>
  );
}

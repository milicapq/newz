import React from "react";
import Ticker from "./Ticker";
import Calender from "./Calender";
import Weather from "./Weather";
import Navbar from "./Navbar";
import HeaderIcons from "./HeaderIcons";
import { Col, Row } from "react-bootstrap";

export default function Header() {
  return (
    <div className="header">
      <div className="container-fluid bg-primary d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h6 className="mt-1">Market Data Today</h6>
            <Ticker />
          </div>
        </div>
      </div>
      <div className="container p-3">
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
          <Row>
            <Col xs={6}>
              <div className="border-bottom d-flex align-items-center mt-4">
                <img className="px-2" src="/envelope-icon.svg" alt="" />
                <span className="">SUBSCRIBE</span>
              </div>
            </Col>
            <div className="py-3 col-6">
              <img className="p-2 mt-2" src="/profile-icon.svg" alt="" />
              <img className="border-end p-2" src="/bag-icon.svg" alt="" />
              <img className="px-3" src="/search-icon.svg" alt="" />
            </div>
          </Row>
        </div>
        <div className="d-flex justify-content-between w-100 border-bottom">
          <Navbar />
          <HeaderIcons />
        </div>
      </div>
    </div>
  );
}

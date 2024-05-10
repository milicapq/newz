import React from "react";
import Ticker from "./Ticker";
import Calender from "./Calender";
import Weather from "./Weather";
import Navbar from "./Navbar";
import HeaderIcons from "./HeaderIcons";
import { Col, Row } from "react-bootstrap";
import { LiaEnvelope } from "react-icons/lia";
import { GoPerson } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { VscSearch } from "react-icons/vsc";
import TabletMobileNav from "./TabletMobileNav";

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
      <TabletMobileNav className="d-lg-none" />
      <div className="container p-3 d-md-none d-lg-block">
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
            <Col xs={8}>
              <div className="border-bottom d-flex align-items-center mt-4">
                <LiaEnvelope className="" />
                <span className="px-2">SUBSCRIBE</span>
              </div>
            </Col>
            <Col
              xs={4}
              className="d-flex justify-content-between align-items-center"
            >
              <GoPerson />
              <HiOutlineShoppingBag className="" />
              <VscSearch className="ms-2 border-start" />
            </Col>
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

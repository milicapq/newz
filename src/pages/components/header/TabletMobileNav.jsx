import React from "react";
import Navbar from "./Navbar";
import Calender from "./Calender";
import Weather from "./Weather";
import SearchHeader from "./SearchHeader";

export default function TabletMobileNav() {
  return (
    <nav className="navbar bg-body-tertiary fixed-top d-lg-none">
      <div className="container-fluid">
        <div className="container d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img className="p-1" src="/Untitled.png" alt="Logo" />
          </a>
          <Calender />
          <Weather />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header border border-muted">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img className="p-1" src="/Untitled.png" alt="Logo" />
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div>
              <SearchHeader />
            </div>
            <div className="offcanvas-body">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

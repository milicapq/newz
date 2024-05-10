import React from "react";
import Navbar from "./Navbar";
import Calender from "./Calender";
import Weather from "./Weather";

export default function TabletMobileNav() {
  return (
    <nav class="navbar bg-body-tertiary fixed-top d-lg-none">
      <div class="container-fluid">
        <div class="container d-flex justify-content-between align-items-center">
          <a class="navbar-brand" href="#">
            <img className="p-1" src="/Untitled.png" alt="" />
          </a>
          <Calender />
          <Weather />
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                <img className="p-1" src="/Untitled.png" alt="" />
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

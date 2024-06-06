import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

export default function PageNavigation({ handleNextClick, handlePrevClick }) {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination m-auto p-md-1">
        <li className="page-item px-md-1">
          <a
            className="page-link p-0 p-md-2"
            href="#"
            aria-label="Previous"
            onClick={handlePrevClick}
          >
            <span aria-hidden="true">
              <SlArrowLeft className="text-muted" />
            </span>
          </a>
        </li>
        <li className="page-item">
          <a
            className="page-link p-0 p-md-2"
            href="#"
            aria-label="Next"
            onClick={handleNextClick}
          >
            <span aria-hidden="true">
              <SlArrowRight className="text-muted" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

import React, { useState } from "react";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

export default function PageNavigation() {
  const data = ["ghbjn", "fgvhbnj"];
  const [recordsPerPage] = useState(5);
  const nPages = Math.ceil(data.length / recordsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination m-auto p-1">
        <li className="page-item px-1">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={goToPrevPage}
          >
            <span aria-hidden="true">
              <SlArrowLeft className="text-muted" />
            </span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">
              <SlArrowRight className="text-muted" />
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

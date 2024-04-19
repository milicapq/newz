import React from "react";

export default function PageNavigation() {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination m-auto p-1">
        <li className="page-item px-1">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&lang;</span>
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&rang;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

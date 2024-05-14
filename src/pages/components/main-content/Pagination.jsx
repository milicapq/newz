import React from "react";
import Sticker from "./Sticker";
import PageNavigation from "./PageNavigation";

export default function Pagination() {
  return (
    <div className="container mt-md-5 mt-2">
      <div className="d-flex align-items-center justify-content-between px-0 bg-secondary">
        <Sticker label={"Breaking News"}>
          <img className="p-2" src="/thunder.svg" alt="" />
        </Sticker>
        <div className="pagination-text d-flex align-items-center bg-secondary">
          <div className="pag d-flex align-items-center justify-content-center">
            <span className="mx-3 border-bottom">
              The biggest takeaways from the first Jan 6, 6 hearing
            </span>
            <span className="mx-4"></span>
            <span className="d-none d-lg-block">
              The biggest takeaways from the first Jan 6, 6 hearing
            </span>
          </div>
          <PageNavigation />
        </div>
      </div>
    </div>
  );
}

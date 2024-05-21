import React from "react";
import Sticker from "./Sticker";
import PageNavigation from "./PageNavigation";

export default function Pagination() {
  return (
    <div className="container mt-4 px-3">
      <div className="d-block d-md-flex align-items-center justify-content-between bg-secondary">
        <Sticker label={"Breaking News"}>
          <img className="p-2" src="/thunder.svg" alt="" />
        </Sticker>
        <div className="pagination-text d-flex align-items-center bg-secondary">
          <div className="pag d-flex align-items-center justify-content-center p-2">
            <span className="mx-md-3 underline">
              The biggest takeaways from the first Jan 6, 6 hearing
            </span>
            <span className="mx-4 d-none d-lg-block"></span>
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

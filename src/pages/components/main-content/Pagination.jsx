import React, { useState } from "react";
import Sticker from "./Sticker";
import PageNavigation from "./PageNavigation";

export default function Pagination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const breakingNews = [
    {
      news1: "The biggest takeaways from the first Jan 6, 6 hearing",
      news2: "Starbucks CEO Howard Schultz pleads with workers to..",
    },
    {
      news1: "Putin 'preparing to starve' parts of developing world",
      news2: "Biden asks Congress for $33 billion to support Ukraine",
    },
  ];
  const handlePrevClicks = (e) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      e.preventDefault();
    }
  };

  const handleNextClicks = (e) => {
    if (currentIndex < breakingNews.length - 1) {
      setCurrentIndex(currentIndex + 1);
      e.preventDefault();
    }
  };

  return (
    <div className="container mt-4 px-3">
      <div className="d-block d-md-flex align-items-center justify-content-between bg-secondary">
        <Sticker label={"Breaking News"}>
          <img className="p-2" src="/thunder.svg" alt="" />
        </Sticker>
        <div className="pagination-text d-flex align-items-center bg-secondary me-lg-4">
          <div className="pag d-flex align-items-center justify-content-center p-lg-2 me-lg-5">
            <span className="mx-md-3 underline">
              {breakingNews[currentIndex].news1}
            </span>
            <span className="mx-4 d-none d-lg-block"></span>
            <span className="d-none d-lg-block">
              {breakingNews[currentIndex].news2}
            </span>
          </div>

          <div className="ms-5">
            <PageNavigation
              handleNextClick={handleNextClicks}
              handlePrevClick={handlePrevClicks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

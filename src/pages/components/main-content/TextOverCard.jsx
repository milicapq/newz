import React, { useState } from "react";
import PageNavigation from "./PageNavigation";
import Sticker from "./Sticker";
import DateUserComment from "./DateUserComment";
// import { TextOverCardInfo } from "../../../data/TextOverCardData";

export default function TextOverCard({ latestNews, TextOverCardInfo }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = (e) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      e.preventDefault();
    }
  };

  const handleNextClick = (e) => {
    if (currentIndex < TextOverCardInfo.length - 1) {
      setCurrentIndex(currentIndex + 1);
      e.preventDefault();
    }
  };
  return (
    <div
      className={`card text-white bg-transparent rounded-0 pointer ${
        latestNews ? "heightNews" : ""
      }`}
    >
      {TextOverCardInfo.slice(currentIndex, currentIndex + 1).map(
        (overCard) => (
          <div key={overCard.pagination}>
            <img
              src={overCard?.img}
              className={`${latestNews && "heightNews"}`}
              alt="..."
            />
            <div className="card-img-overlay d-flex flex-column justify-content-between px-5 mt-2">
              <div className="d-flex justify-content-between">
                <Sticker label={"BUSINESS"} />
                {overCard.pagination && (
                  <PageNavigation
                    className={`${"col - 6" && "d - none"} `}
                    handleNextClick={handleNextClick}
                    handlePrevClick={handlePrevClick}
                  />
                )}
              </div>
              {overCard?.video && <i className="bi bi-play-circle m-auto"> </i>}
              <div>
                <h3 className="card-title">{overCard?.title}</h3>
                <p className="card-text">{overCard?.content}</p>
                <DateUserComment lightDate={true} newz={overCard} />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

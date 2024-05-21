import React, { useState } from "react";
import PageNavigation from "./PageNavigation";
import Sticker from "./Sticker";
import { IoPlayCircle } from "react-icons/io5";
import { textOverCardData } from "../../../data/LatestNewsData";
import DateUserComment from "./DateUserComment";

export default function TextOverCard({ latestNews }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [info, setInfo] = useState([
    {
      img: "/pic1.png",
      title: "Forbes #3: Top 10 Businessman NYC",
      content:
        "Its first decline in subscribers since 2011 triggered a $54 billion stock value loss and [...]",
      date: "dec 24, 2022",
      comments: 12,
    },
    {
      img: "/pic2.png",
      title: "Forbes #3: Top 12 Businessman NYC",
      content:
        "Its first decline in subscribers since 2011 triggered a $54 billion stock value loss and [...]",
      date: "dec 24, 2022",
      comments: 12,
    },
  ]);
  const handlePrevClick = (e) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      e.preventDefault();
    }
  };

  const handleNextClick = (e) => {
    if (currentIndex < info.length - 1) {
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
      <img
        src={info[currentIndex].img}
        className={`height ${latestNews && "heightNews"}`}
        alt="..."
      />
      <div className="card-img-overlay d-flex flex-column justify-content-between p-4">
        <div className="d-flex justify-content-between">
          <Sticker label={"BUSINESS"} />
          <PageNavigation
            className={`${"col - 3" && "d - none"} `}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
          />
        </div>
        <i className="bi bi-play-circle m-auto"> </i>
        <div>
          <h5 className="card-title">{info[currentIndex].title}</h5>
          <p className="card-text">{info[currentIndex].content}</p>
          <DateUserComment lightDate={true} newz={info[currentIndex]} />
        </div>
      </div>
    </div>
  );
}

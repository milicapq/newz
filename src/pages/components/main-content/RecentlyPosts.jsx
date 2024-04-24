import React from "react";
import HorizontalCard from "./HorizontalCard";

export default function RecentlyPosts() {
  const infos = [
    {
      id: "3",
      label: "MARKET",
      title: "US Stock Market last week, Nike hit near 40%",
      date: "Dec 14,2022",
      comment: 4,
      img: "/pic1.png",
    },
    {
      id: "4",
      label: "MARKET",
      title: "Joe Biden did not participate in the war",
      date: "Dec 14,2022",
      comment: 4,
      img: "/pic1.png",
    },
    {
      id: "5",
      label: "MARKET",
      title: "US Stock Market last week, Nike hit near 40%",
      date: "Dec 1,2022",
      comment: 4,
      img: "/pic2.png",
    },
  ];
  return (
    <div>
      {infos.map((info) => (
        <HorizontalCard info={info} key={info.comment} />
      ))}
    </div>
  );
}

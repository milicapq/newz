import React from "react";
import HorizontalCard from "./HorizontalCard";
import { recentlyPosts } from "../../../data/RecentlyPostsData";

export default function RecentlyPosts() {
  return (
    <div>
      {recentlyPosts.map((post) => (
        <HorizontalCard info={post} key={post.comment} />
      ))}
    </div>
  );
}

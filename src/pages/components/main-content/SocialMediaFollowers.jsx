import React from "react";

export default function SocialMediaFollowers() {
  return (
    <div className="card rounded-0 mt-4">
      <div className="card-body">
        <div className="border-bottom p-2">
          <img
            src="/facebook-icon-blue.svg"
            className="border-end p-2"
            alt=""
          />
          <span className="p-2 fw-bold">575,5K</span>
          <span>Followers</span>
        </div>
      </div>
      <div className="card-body">
        <div className="border-bottom p-2">
          <img src="/twitter-icon-blue.svg" className="border-end p-2" alt="" />
          <span className="p-2 fw-bold">215,7K</span>
          <span>Followers</span>
        </div>
      </div>
      <div className="card-body">
        <div className="border-bottom p-2">
          <img
            src="/instagram-icon-color.svg"
            className="border-end p-2"
            alt=""
          />
          <span className="p-2 fw-bold">98,2K</span>
          <span>Followers</span>
        </div>
      </div>
      <div className="card-body">
        <div className="p-2">
          <img src="/youtube-icon-red.svg" className="border-end p-2" alt="" />
          <span className="p-2 fw-bold">242K</span>
          <span>Subscriber</span>
        </div>
      </div>
    </div>
  );
}

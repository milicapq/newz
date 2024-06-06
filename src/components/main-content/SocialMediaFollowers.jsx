import React from "react";

export default function SocialMediaFollowers() {
  return (
    <div className="card rounded-0 mt-4 p-lg-3 px-5 px-md-0">
      <div className="card-body">
        <div className="border-bottom pb-2">
          <img
            src="/facebook-icon-blue.svg"
            className="border-end px-3 px-lg-0 pe-2"
            alt="Facebook icon"
          />
          <span className="p-2 fw-bold">575,5K</span>
          <span>Followers</span>
        </div>
      </div>
      <div className="card-body pt-0">
        <div className="border-bottom pb-2">
          <img
            src="/twitter-icon-blue.svg"
            className="border-end pe-2 px-3 px-lg-0"
            alt="Twitter icon"
          />
          <span className="p-2 fw-bold">215,7K</span>
          <span>Followers</span>
        </div>
      </div>
      <div className="card-body pt-0">
        <div className="border-bottom pb-2 px-3 px-lg-0">
          <img
            src="/instagram-icon-color.svg"
            className="border-end pe-2"
            alt="Instagram icon"
          />
          <span className="p-2 fw-bold">98,2K</span>
          <span>Followers</span>
        </div>
      </div>
      <div className="card-body pt-0">
        <div>
          <img
            src="/youtube-icon-red.svg"
            className="border-end pe-2 px-3 px-lg-0"
            alt="Youtube icon"
          />
          <span className="p-2 fw-bold">242K</span>
          <span>Subscriber</span>
        </div>
      </div>
    </div>
  );
}

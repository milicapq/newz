import React from "react";

export default function WebStories() {
  return (
    <div className="mt-2 border-top py-4 pointer border-none ms-md-4 ms-lg-0">
      <p className="fw-bold mt-lg-3 ms-md-2 ms-lg-0">GOOGLE WEB STORIES</p>
      <div className="border-bottom p-2 mt-4">
        <img
          className="w-25 rounded-circle p-1 mb-2 border border-danger"
          src="/Untitled1.png"
          alt=""
        />
        <span className="px-3">Kayak stories</span>
      </div>
      <div className="border-bottom p-2 py-3">
        <img
          className="w-25 rounded-circle p-1 border border-muted"
          src="/Untitled1.png"
          alt=""
        />
        <span className="px-3">6 Tips Successful</span>
      </div>
      <div className="p-2">
        <img
          className="w-25 mt-2 rounded-circle p-1 border border-danger"
          src="/Untitled1.png"
          alt=""
        />
        <span className="px-3">PS Controller</span>
      </div>
    </div>
  );
}

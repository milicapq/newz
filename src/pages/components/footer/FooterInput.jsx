import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";

export default function FooterInput() {
  return (
    <div className="input-bg rounded-pill p-1 d-flex align-items-center justify-content-between">
      <FaRegEnvelope className="mt-1 ms-3" />
      <input
        type="text"
        className="rounded-pill text-light border-0"
        name=""
        placeholder="Enter your email"
        id=""
      />
      <div className="bg-light rounded-circle p-2 send-icon">
        <LuSendHorizonal className="text-dark m-2" />
      </div>
    </div>
  );
}

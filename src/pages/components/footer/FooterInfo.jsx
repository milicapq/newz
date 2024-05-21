import React from "react";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { SlHome } from "react-icons/sl";
import { FaRegEnvelope } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
export default function FooterInfo() {
  return (
    <div className="pointer">
      <h5 className="fw-bold mb-3">Newz - Business Magazine</h5>
      <div className="d-flex mb-2 mt-4">
        <SlHome />
        <span className="px-3">223 Orcaard St, Manhattan, NY 032</span>
      </div>
      <div className="d-flex mb-2">
        <FiPhone />
        <span className="px-3">+031 5689 89 98</span>
      </div>
      <div className="d-flex">
        <FaRegEnvelope className="mt-1" />
        <span className="px-3">technology@newz.com</span>
      </div>
      <div className="mt-4 d-flex gap-2">
        <div className="rounded-circle circle border border-light d-flex align-items-center justify-content-center">
          <CiTwitter />
        </div>
        <div className="rounded-circle circle bg-transparent border border-light d-flex align-items-center justify-content-center">
          <SlSocialFacebook />
        </div>
        <div className="rounded-circle circle bg-transparent border border-light d-flex align-items-center justify-content-center">
          <FaInstagram />
        </div>
        <div className="rounded-circle circle bg-transparent border border-light d-flex align-items-center justify-content-center">
          <FiYoutube />
        </div>
      </div>
    </div>
  );
}

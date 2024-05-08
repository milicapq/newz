import React from "react";
import { IoLogoTwitter } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";

export default function HeaderIcons() {
  return (
    <div className="d-flex align-items-center gap-3 text-muted">
      <IoLogoTwitter />
      <FaFacebookF />
      <IoLogoInstagram />
      <FiYoutube />
    </div>
  );
}

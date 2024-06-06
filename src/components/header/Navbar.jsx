import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Navbar() {
  const navbar = [
    { title: "News", link: "/newscategory" },
    { title: "Tech", link: "/techcategory" },
    { title: "Business", link: "/businesscategory" },
    { title: "Politic", link: "/politiccategory" },
    { title: "Market", link: "/marketcategory" },
  ];
  const dropdown = ["Demo", "Features", "Shop"];
  return (
    <ul className="nav py-1 mt-lg-2 d-flex flex-column flex-lg-row gap-3">
      {dropdown.map((drop, index) => (
        <div className="dropdown" key={index}>
          <button
            className="btn px-0 mt-2"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {drop}
            <MdKeyboardArrowDown className="ms-2" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button">
                Action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Another action
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Something else here
              </button>
            </li>
          </ul>
        </div>
      ))}

      {navbar.map((nav, index) => (
        <li className="nav-item" key={index}>
          {nav === "News" ? (
            <div className="bg-primary rounded position-absolute ms-5 gap-3">
              <span className="text-light p-1">HOT</span>
            </div>
          ) : (
            ""
          )}
          <a className="nav-link px-0 px-lg-2 m-md-2 mt-2" href={nav.link}>
            {nav.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

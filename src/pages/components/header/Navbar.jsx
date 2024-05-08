import React from "react";

export default function Navbar() {
  const navbar = ["News", "Tech", "Business", "Politic", "Market"];
  const dropdown = ["Demo", "Features", "Shop"];
  return (
    <ul className="nav py-1 mt-2">
      {dropdown.map((drop) => (
        <div className="dropdown">
          <button
            className="btn dropdown-toggle px-0"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {drop}
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

      {navbar.map((nav) => (
        <li className="nav-item">
          <a className="nav-link" href="#">
            {nav}
          </a>
        </li>
      ))}
    </ul>
  );
}

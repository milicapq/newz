import React from "react";

export default function Navbar() {
  return (
    <>
      <ul className="nav py-1 mt-2">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle px-0"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Demo
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
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Features
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
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Shop
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
        <li className="nav-item">
          <a className="nav-link" href="#">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Tech
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Business
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Politic
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Market
          </a>
        </li>
      </ul>
    </>
  );
}

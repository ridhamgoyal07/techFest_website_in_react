import React from "react";
import logo from "../images/techFESTlogo.png";
import { NavLink } from "react-router-dom";
// import '../ContactUs.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-light m-0" id="navbar">
      <div className="container-fluid mt-2 ms-2">
        <NavLink className="navbar-brand" to="/">
          <img
            src={logo}
            alt="Techfest Logo"
            className="d-inline-block align-text-top"
            id="techfest-logo"
          />
        </NavLink>
        <div className="navbar-nav ms-auto">
          <ul className="mb-0 mt-2 ms-0 p-0">
            <NavLink to="/pr_intern" className="btn btn-outline-light btn-sm mx-2">
              PR Intern
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-light btn-sm mx-2">
              Register
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

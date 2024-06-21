import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink
          isActive={() => {
            return window.location.pathname === "/";
          }}
          to={"/"}
        >
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink
          isActive={() => {
            return window.location.pathname === "/u1/places";
          }}
          to={"/u1/places"}
        >
          MY PLACES
        </NavLink>
      </li>
      <li>
        <NavLink
          isActive={() => {
            return window.location.pathname === "/places/new";
          }}
          to={"/places/new"}
        >
          ADD PLACE
        </NavLink>
      </li>
      <li>
        <NavLink
          isActive={() => {
            return window.location.pathname === "/auth";
          }}
          to={"/auth"}
        >
          AUTHENTICATE
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;

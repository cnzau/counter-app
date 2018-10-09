import React, { Component } from "react";

// Stateless Functional Component (sfc-->)
// 'this' only works in class components for SFC you need to add props as parameter
// has one render method, no event handlers, no helper methods to cacilate values, no state, all data via props
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* Remove 'this' since it only works in class components */}
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;

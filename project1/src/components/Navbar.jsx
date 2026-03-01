import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Emiliano</h1>
      </Link>
      <ul className="menu">
        <li>
          <Link className="menu-link" to="">
            Me
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="My_self">
            My self
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="#">
            My products
          </Link>
        </li>
        <li>
          <Link className="menu-link" to="#">
            contact me
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;

import React, { useContext } from "react";
import "../Style/Pfolio.css";

import { Link } from "react-router-dom";
import { darkmode } from "../context/Darkmode";


function Footer() {
  const { mode } = useContext(darkmode);
const mode_change = {
  color: mode === "dark" ? "white" : "#333",
};
  return (
    <>
      {" "}
      <footer className="">
        <nav>
          <div className="nav-links-container">
            <ul className="nav-links" >
              <li >
                <Link to="/"  style={mode_change}>Home</Link>
              </li>
              <li>
                <Link to="/about"  style={mode_change}>About</Link>
              </li>
              <li>
                <Link to="/projects"  style={mode_change}>Projects</Link>
              </li>
              <li>
                <Link to="/contact"  style={mode_change}>Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <p className=" mt-4" style={mode_change}>Copyright &#169; 2023 Ayush kumar. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Footer;

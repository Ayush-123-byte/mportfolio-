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
    <div div className=" flex justify-center items-center w-full ">
      {" "}
      <footer > 
        <p className=" mt-4" style={mode_change}>
          Copyright &#169; 2023 Ayush kumar. All Rights Reserved.
        </p>
      </footer>
    </div >
  );
}

export default Footer;

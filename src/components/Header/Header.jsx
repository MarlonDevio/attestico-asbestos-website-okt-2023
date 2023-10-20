import "./Header.css";
import React from "react";
import { Navigation } from "../index.js";

function Header({targetRef}) {
  return (
    <div className="header">
      <Navigation targetRef={targetRef}/>
    </div>
  );
}

export default Header;

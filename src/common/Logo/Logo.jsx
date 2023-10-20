import "./Logo.css";
import React from "react";
import { logo } from "../../assets/index.js";

function Logo() {
  return <img src={logo} className="logo" alt="Attestico Logo" />;
}

export default Logo;

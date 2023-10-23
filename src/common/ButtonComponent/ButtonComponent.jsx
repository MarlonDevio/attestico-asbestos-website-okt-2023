import "./ButtonComponent.css";
import React from "react";

function ButtonComponent({ onClick, className, content }) {
  return (
    <button onClick={onClick} className={`ButtonComponent ${className}`}>
      {content}
    </button>
  );
}

export default ButtonComponent;

import "./ButtonComponent.css";
import React from "react";

function ButtonComponent({ onClick, className, content, style }) {
  return (
    <button
      style={style}
      onClick={onClick}
      className={`ButtonComponent ${className}`}
    >
      {content}
    </button>
  );
}

export default ButtonComponent;

import "./InfoList.css";
import React from "react";
import { generateNewObjs } from "../../../../utils/helpers.js";

function InfoList({ content, icon }) {
  // const { extraInfo } = content;

  return (
    <ul className="">
      <div className="infoList">
        <img className="infoList-img" src={icon} alt="info" />
        <div className="flex-wrapper-vertical infolist-text">
          {content.extraInfo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    </ul>
  );
}

export default InfoList;

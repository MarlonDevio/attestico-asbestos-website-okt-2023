import "./PricingCard.css";
import { euroSign, size } from "../../../assets/index.js";
import {Button, ButtonComponent} from "../../../common/index.js";
import {handleEmailClick} from "../../../utils/helpers.js";

function PricingCard({ content}) {
  return (
    <div className="pricing-card">
      <div className="img-container">
        <img className="logo-content" src={content.logo} alt="" />
      </div>
      <div className="text-container">
        <p className="card-name">{content.title}</p>
        <div className="flex-wrapper-horizontal card-row">
          <img className="svg-img" src={size} alt="" />
          <p className="card-opp">{content.opp}</p>
        </div>
        <div className="flex-wrapper-horizontal card-row">
          <img className="svg-img" src={euroSign} alt="" />
          <p className="card-price">{content.price}</p>
        </div>
      </div>

      <ButtonComponent
        style={{
          fontSize: "1.8rem",
          justifySelf: "center",
          padding: "1rem 1.5rem",
        }}
        onClick={handleEmailClick}
        className={"btn--pink--button"}
        content="Contact"
      />
    </div>
  );
}

export default PricingCard;

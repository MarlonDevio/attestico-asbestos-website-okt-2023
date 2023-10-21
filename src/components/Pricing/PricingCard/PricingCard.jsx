import "./PricingCard.css";
import { euroSign, size } from "../../../assets/index.js";
import { Button } from "../../../common/index.js";

function PricingCard({ content, targetRef }) {
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

      <Button
        style={{
          fontSize: "1.8rem",
          justifySelf: "center",
          padding: "1rem 1.5rem",
        }}
        targetRef={targetRef}
        className={"btn--pink"}
        content="Contact"
      />
    </div>
  );
}

export default PricingCard;

import "./Pricing.css";
import { HeadingSecondary, SubHeading } from "../../common/index.js";
import { tarieven } from "../../constants/constants.js";
import { PricingCard } from "../index.js";

function Pricing({ targetRef }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SubHeading content="Tarieven" />
        <HeadingSecondary content="Investeren in AsbestVeiligheid" />
      </div>

      <div className="container grid grid--3-cols">
        {tarieven.map((item) => (
          <PricingCard targetRef={targetRef} key={item.id} content={item} />
        ))}
      </div>
    </section>
  );
}

export default Pricing;

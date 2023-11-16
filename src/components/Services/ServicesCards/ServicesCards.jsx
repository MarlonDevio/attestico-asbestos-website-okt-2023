import "./ServicesCards.css";
import { diensten } from "../../../constants/constants.js";
import { ServiceCard } from "../../index.js";

function ServicesCards() {
  return (
    <div className="service-cards grid grid--6-cols">
      {diensten.map((dienst) => (
        <ServiceCard
          key={dienst.id}
          content={dienst.description}
          logoSrc={dienst.logo}
        />
      ))}
    </div>
  );
}

export default ServicesCards;

import "./HowItWorks.css";
import { Step } from "../index.js";
import { FASES } from "../../constants/constants.js";

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <span className="subheading">Hoe het Werkt bij Attestico</span>
        <h2 className="heading-secondary">
          Uw Snelweg naar een Asbestveilig Vlaanderen 2040!
        </h2>
      </div>
      <div className="container grid grid--2-cols">
        {FASES.map((content, index) => (
          <Step key={index} content={content} isEven={index % 2 === 0} />
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;

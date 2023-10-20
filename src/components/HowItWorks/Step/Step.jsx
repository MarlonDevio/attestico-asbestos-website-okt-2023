import "./Step.css";
import { useMediaQuery } from '../../../utils/index.js';

function Step({ content, isEven }) {
  const isDesktop = useMediaQuery("(min-width: 900px)")
  return (
    <>
      <div
        className={`step-text-box ${isEven ? "grid-col-1" : "grid-col-2"}`} style={isDesktop ? content.style : {}}
      >
        <p className="step-number">{content.num}</p>
        <h3 className="heading-tertiary">{content.title}</h3>
        <p className="step-description">
          {content.steps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </p>
      </div>
      <div className={`step-img-box ${isEven ? "grid-col-2" : "grid-col-1"}`}>
        <img className="step-img" src={content.logo} alt={content.title} />
      </div>
    </>
  );
}

export default Step;

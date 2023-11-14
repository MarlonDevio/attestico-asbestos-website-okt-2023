import "./Step.css";
import { useMediaQuery } from "../../../utils/index.js";
import { ButtonComponent } from "../../../common/index.js";
import { handleEmailClick } from "../../../utils/helpers.js";

function Step({ content, isEven }) {
  const isDesktop = useMediaQuery("(min-width: 900px)");

  const openPDFInNewTab = () => {
    window.open(
      "/opdrachtformulier.pdf",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <div
        className={`step-text-box ${isEven ? "grid-col-1" : "grid-col-2"}`}
        style={isDesktop ? content.style : {}}
      >
        <p className="step-number">{content.num}</p>
        <h3 className="heading-tertiary">{content.title}</h3>
        <p className="step-description">
          {content.steps.map((step, index) => (
            <p key={index}>
              {step === "Mail naar info@attestico.be." ? (
                <a href="mailto:info@attestico.be">
                  Mail naar info@attestico.be
                </a>
              ) : step === "Wilt u liever online boeken? Dat kan ook!" ? (
                <p>
                  <em>Binnenkort ook mogelijkheid tot online boeken</em>
                </p>
              ) : (
                step
              )}
            </p>
          ))}
        </p>
        {content.hasEmailFunctionality && (
          <ButtonComponent
            content={"Mail ons"}
            onClick={handleEmailClick}
            className={"btn--green--button"}
          />
        )}
        {content.hasPDFFunctionality && (
          <ButtonComponent
            content={"Bekijk opdrachtformulier"}
            className={"btn--pink--button"}
            onClick={openPDFInNewTab}
          />
        )}
      </div>
      <div className={`step-img-box ${isEven ? "grid-col-2" : "grid-col-1"}`}>
        <img className="step-img" src={content.logo} alt={content.title} />
      </div>
    </>
  );
}

export default Step;

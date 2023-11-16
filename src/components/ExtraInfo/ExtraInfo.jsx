import "./ExtraInfo.css";
import { HeadingSecondary, SubHeading } from "../../common/index.js";
import { InfoCard } from "../index.js";
import { extra } from "../../constants/constants.js";
import { generateNewObjs } from "../../utils/helpers.js";

function ExtraInfo() {

  return (
    <section className="section" id="extra-info">
      <div className="container con-center-text">
        <SubHeading content={"info"} />
        <HeadingSecondary content={"Extra Diensten & Informatie"} />
      </div>

      <div className="container grid grid--3-cols">
        {extra.map((content) => (
          <InfoCard
            key={content.id}
            icon={content.icon}
            content={content}
            className={content}
          />
        ))}
      </div>
    </section>
  );
}

export default ExtraInfo;

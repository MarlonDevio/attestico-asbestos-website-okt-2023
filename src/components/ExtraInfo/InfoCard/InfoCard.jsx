import "./InfoCard.css";
import { InfoList } from "../../index.js";

function InfoCard({ content, icon }) {
  return (
    <div className={`infoCard flex-wrapper-vertical ${content.className}`}>
      {content.logo && (
        <img
          className="infocard-big-img"
          src={content.logo}
          alt={content.title}
        />
      )}
      <div className="infocard-text-container flex-wrapper-vertical">
        {content.tag && (
          <div className="flex-wrapper-horizontal tags">
            {content.tag.map((t, index) => (
              <span key={index} className="tag">
                {t}
              </span>
            ))}
          </div>
        )}

        <p>{content.title}</p>
        <InfoList icon={icon} content={content} />
      </div>
    </div>
  );
}

export default InfoCard;

import "./ServiceCard.css";

function ServiceCard({ logoSrc, content }) {
  return (
    <div className="service-card-container">
      <img src={logoSrc} alt="logo" className="service-card-logo" />
      <p className="service-card-text">{content}</p>
    </div>
  );
}

export default ServiceCard;

import "./Services.css";
import { ServicesCards } from "../index.js";

function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <span className="subheading">Diensten</span>
        <h2 className="heading-secondary">Bekijk Onze Diensten</h2>
        <ServicesCards />
      </div>
    </section>
  );
}

export default Services;

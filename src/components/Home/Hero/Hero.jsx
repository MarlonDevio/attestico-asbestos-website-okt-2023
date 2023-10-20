import "./Hero.css";
import { asbestInspection } from "../../../assets/index.js";
import { AsbestVeilig, Button } from "../../../common/index.js";

function Hero() {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            Razendsnel, <span className="coloured-span-green">Gekeurd</span> Binnen
            Enkele Dagen
          </h1>
          <AsbestVeilig />
          <p className="hero-description">
            Welkom bij Attestico, uw vertrouwde partner in asbestconsultatie en
            -attesten in België. Met jarenlange ervaring en certificering bieden
            wij u een veilige en efficiënte oplossing voor al uw
            asbestgerelateerde vraagstukken. Maak vandaag nog gebruik van onze
            expertise en neem contact op voor een vrijblijvend advies.
          </p>

          <Button
            className="btn--full margin-right-sm"
            content="Claim je attest nu"
          />
          <Button className="btn--outline" content={<>Ontdek meer &darr;</>} />
        </div>
        <div className="hero-img-box">
          <img
            className="hero-img"
            src={asbestInspection}
            alt="Asbestos Certificate Employer"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

import "./ContactForm.css";

const ContactForm = () => {
  return (
    <section
      className="section"
      style={{ background: "var(--color-blue-100)" }}
    >
      <div className="container">
        <span className="subheading">Contact</span>
        <h2 className="heading-secondary">Kom met ons in contact</h2>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="name">
            Naam: <input id="name" type="text" name="name" />
          </label>

          <label htmlFor="email">
            Email: <input id="email" type="email" name="email" />
          </label>

          <label htmlFor="message">
            Bericht: <textarea id="message" name="message"></textarea>
          </label>

          <button type="submit">Verstuur</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

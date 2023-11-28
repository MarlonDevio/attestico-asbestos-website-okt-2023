import "./ContactForm.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Netlify zal de form submission afhandelen.
  };

  return (
    <section
      className="section"
      style={{ background: "var(--color-blue-100)" }}
    >
      <div className="container">
        <span className="subheading">Contact</span>
        <h2 className="heading-secondary">Kom met ons in contact</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label htmlFor="name">
              Naam: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label htmlFor="message">
              Bericht: <textarea name="message"></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <p>
            <button type="submit">Verstuur</button>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

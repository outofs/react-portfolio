import React from "react";
import Contact from "./Contact";
import "./contact-me.scss";

const ContactMe = () => {
  return (
    <section className="contact section" id="contact">
      <div className="contact__main">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle"> Get in touch </span>

        <div className="contact__container container grid">
          <Contact title="Call Me" subTitle="+380636552259" icon="uil-phone" />

          <Contact
            title="Email"
            subTitle="oleksandr.hirych@gmail.com"
            icon="uil-envelope"
          />

          <Contact title="Location" subTitle="Kyiv" icon="uil-map-marker" />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

import React from "react";
import { ContactProps } from "../../interfaces";
import "./contact-me.scss";

const Contact = (props: ContactProps) => {
  return (
    <div className="contact__information">
      <i className={`uil ${props.icon} contact__icon`}></i>

      <div>
        <h3 className="contact__title">{props.title}</h3>
        <span className="contact__subtitle">{props.subTitle} </span>
      </div>
    </div>
  );
};

export default Contact;

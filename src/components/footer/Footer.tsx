import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Oleksandr</h1>
            <span className="footer__subtitle">Front-End Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.facebook.com/profile.php?id=100017288166286"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-facebook footer__icon"></i>
            </a>
            <a
              href="https://www.instagram.com/out.ofs"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-instagram footer__icon"></i>
            </a>
            <a
              href="https://t.me/trnscdntl"
              target="_blank"
              className="footer__social"
            >
              <i className="uil uil-telegram footer__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

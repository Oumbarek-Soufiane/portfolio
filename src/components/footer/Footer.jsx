import react from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer__container  container">
        <h1 className="footer__title">Soufiane</h1>
        <ul className="footer__list">
          <li >
            <a href="#home" className="footer__link">Home</a>
          </li>
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#works" className="footer__link">Works</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://www.facebook.com/Sofane.qlf" className="footer__social-icon" target="_blank">
           <i className="bx bxl-facebook"></i>
        </a>
        <a href=" https://www.instagram.com/no_chorus2/#s" className="footer__social-icon" target="_blank">
            <i className="bx bxl-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/oumbarek-soufiane2a841267" className="footer__social-icon" target="_blank">
           <i className="bx bxl-linkedin"></i>
        </a>
        </div>

        <span className="footer__copy">
          &#169; 2025 Soufiane Oumbarek. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Utilisation de Link au lieu de <a>
import "./footer.css";

const Footer = () => {
  const footerTitleRef = useRef(null);
  const footerLinksRef = useRef(null);
  const footerSocialRef = useRef(null);
  const footerCopyRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Déterminer le basename pour l'application
  // Cela peut être configuré dynamiquement en fonction de l'environnement
  const basename = process.env.PUBLIC_URL || "";

  useEffect(() => {
    // Set up the Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the fade-in class when the element is visible
          entry.target.classList.add("fade-show");
          // Stop observing after animation is triggered
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Forcer la visibilité après un court délai
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    // Observe footer elements
    const elements = [
      footerTitleRef.current,
      footerLinksRef.current,
      footerSocialRef.current,
      footerCopyRef.current
    ];

    elements.forEach(element => {
      if (element) observer.observe(element);
    });

    return () => {
      // Clean up
      elements.forEach(element => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="Footer">
      <div className="footer__container container">
        <h1 className={`footer__title fade-up ${isLoaded ? "fade-show" : ""}`} ref={footerTitleRef}>Soufiane</h1>
        
        <ul className={`footer__list fade-up ${isLoaded ? "fade-show" : ""}`} ref={footerLinksRef}>
          <li>
            {/* Utilisation de Link avec to au lieu de <a href> */}
            <Link to={`${basename}/`} className="footer__link">Home</Link>
          </li>
          <li>
            <Link to={`${basename}/about`} className="footer__link">About</Link>
          </li>
          <li>
            <Link to={`${basename}/works`} className="footer__link">Works</Link>
          </li>
        </ul>

        <div className={`footer__social fade-up ${isLoaded ? "fade-show" : ""}`} ref={footerSocialRef}>
          <a href="https://www.facebook.com/Sofane.qlf" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="https://www.instagram.com/no_chorus2/#s" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/oumbarek-soufiane2a841267" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className={`footer__copy fade-up ${isLoaded ? "fade-show" : ""}`} ref={footerCopyRef}>
          &#169; 2025 Soufiane Oumbarek. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
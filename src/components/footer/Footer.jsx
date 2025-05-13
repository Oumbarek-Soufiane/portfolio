
import React, { useEffect, useRef } from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerTitleRef = useRef(null);
  const footerLinksRef = useRef(null);
  const footerSocialRef = useRef(null);
  const footerCopyRef = useRef(null);

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
        <h1 className="footer__title fade-up" ref={footerTitleRef}>Soufiane</h1>
        
        <ul className="footer__list fade-up" ref={footerLinksRef}>
          <li>
             <NavLink to="/" className="footer__link">
             Home
             </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="footer__link">About </NavLink>
          </li>
          <li>
            <NavLink to="/works" className="footer__link">Works </NavLink>
          </li>
        </ul>

        <div className="footer__social fade-up" ref={footerSocialRef}>
         
          <a href="https://www.instagram.com/no_chorus2/#s" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/oumbarek-soufiane2a841267" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>

        <span className="footer__copy fade-up" ref={footerCopyRef}>
          &#169; 2025 Soufiane Oumbarek. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  const toggleTheme = () => {
    setIsRotating(true);

    setTimeout(() => {
      const root = document.documentElement;
      if (isDark) {
        // Switch to light mode
        root.removeAttribute('data-theme');
      } else {
        // Switch to dark mode
        root.setAttribute('data-theme', 'dark');
      }
      setIsDark((prev) => !prev);
      setIsRotating(false);
    }, 400); // Matches animation duration
  };

  // Fermer le menu après avoir cliqué sur un lien (pour mobile)
  const closeMenu = () => {
    showMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/portfolio" className="nav__logo">
          <h1 className="masked_text">Soufiane</h1>
        </NavLink>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink to={`${basename}/`} className={({isActive}) => isActive ? "nav__link active-link" : "nav__link"} onClick={closeMenu}>
                <i className="uil uil-estate nav__icon"></i>
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to={`${basename}`/about} className={({isActive}) => isActive ? "nav__link active-link" : "nav__link"} onClick={closeMenu}>
                <i className="uil uil-user nav__icon"></i>
                About
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to={`${basename}`/skills} className={({isActive}) => isActive ? "nav__link active-link" : "nav__link"} onClick={closeMenu}>
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to={`${basename}`/works} className={({isActive}) => isActive ? "nav__link active-link" : "nav__link"} onClick={closeMenu}>
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Works
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to={`${basename}`/qualification} className={({isActive}) => isActive ? "nav__link active-link" : "nav__link"} onClick={closeMenu}>
                <i className="uil uil-award nav__icon"></i>
                Qualification
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to={`${basename}`/contact} className={({isActive}) => isActive ? "nav__link active-link" : "nav__link"} onClick={closeMenu}>
                <i className="uil uil-message nav__icon"></i>
                Contact
              </NavLink>
            </li>

            <li className="nav_item">
              <a
                href="#"
                className="nav__link"
                onClick={(e) => {
                  e.preventDefault();
                  toggleTheme();
                }}
              >
                <i
                  className={`uil ${
                    isDark ? "uil-moon" : "uil-sun"
                  } nav__icon_dark_light ${
                    isRotating ? "rotate-animation" : ""
                  }`}
                ></i>
              </a>
              <style jsx>{`
                /* Rotation animation */
                .rotate-animation {
                  animation: rotateIcon 0.4s ease-in-out;
                }
                
                @keyframes rotateIcon {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
                }
              `}</style>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
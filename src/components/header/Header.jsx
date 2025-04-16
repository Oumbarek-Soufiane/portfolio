import React, { useState, useRef } from "react";
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

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
        <span className="header__glow"></span>Soufiane
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#works" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>
                Works
              </a>
            </li>


            <li className="nav__item">
              <a href="#qualification" className="nav__link">
              <i class="uil uil-award nav__icon"></i>
                Qualification
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav__link">
              <i class="uil uil-message nav__icon"></i>
                Contact
              </a>
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

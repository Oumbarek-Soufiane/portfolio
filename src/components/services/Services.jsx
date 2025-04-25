import React, { useEffect, useRef } from "react";
import serviceImg from "../../assets/work1.png";
import serviceImg1 from "../../assets/work2.png";
import serviceImg2 from "../../assets/work3.png";
import serviceImg4 from "../../assets/work5.png";
import serviceImg5 from "../../assets/screen.png";
import serviceImg6 from "../../assets/work6.png"
import "./services.css";

const Services = () => {
  const worksRef = useRef(null);
  const serviceItemsRef = useRef([]);

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

    // Observe the title section
    if (worksRef.current) {
      observer.observe(worksRef.current);
    }

    // Observe each service offer
    serviceItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      // Clean up
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
      serviceItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  // Reset refs array when adding a new ref
  const addToRefs = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };

  return (
    <div className="works section" id="works">
      <div className="works__header fade-up" ref={worksRef}>
        <h2 className="section__title">Works</h2>
        <span className="section__subtitle">What I realise</span>
      </div>

      <div className="service__offers">
        <div className="service__offer fade-up" ref={addToRefs}>
          <a href="https://github.com/Oumbarek-Soufiane/Aim_App">
            <img src={serviceImg} alt="service1" className="service__1" />
          </a>
          <h2>School Management</h2>
          <p>
            «Institution Academic Connect: Your Gateway to Crea-tivity and
            Innovation
          </p>
          <a href="https://github.com/Oumbarek-Soufiane/Aim_App">
            <i className="bx bxs-share"></i>
          </a>
        </div>

        <div className="service__offer fade-up" ref={addToRefs}>
          <a href="https://github.com/Oumbarek-Soufiane/School_Elkarama_App" target="_blank" rel="noreferrer">
            <img src={serviceImg1} alt="service2" className="service__2" />
          </a>
          <h2>School Management</h2>
          <p>
            «Institution Academic Connect: Your Gateway to Crea-tivity and
            Innovation El karama Boussaid
          </p>
          <a href="https://github.com/Oumbarek-Soufiane/School_Elkarama_App" target="_blank" rel="noreferrer">
            <i className="bx bxs-share"></i>
          </a>
        </div>

        <div className="service__offer fade-up" ref={addToRefs}>
          <a href="https://github.com/Oumbarek-Soufiane/project-hackathon" target="_blank" rel="noreferrer">
            <img src={serviceImg2} alt="service3" className="service__3" />
          </a>
          <h2>Hackathon Project</h2>
          <p> «Smart Garbage Using Arduino And C++ Language </p>
          <a href="https://github.com/Oumbarek-Soufiane/project-hackathon" target="_blank" rel="noreferrer">
            <i className="bx bxs-share"></i>
          </a>
        </div>

        <div className="service__offer fade-up" ref={addToRefs}>
          <img src={serviceImg4} alt="service4" className="service__4" />
          <h2>Chefchaoun Project</h2>
          <p> « Professional Composition Using Adobe Photoshop </p>
          <a download="" href={serviceImg4} target="_blank" rel="noreferrer">
            <i className="bx bxs-share"></i>
          </a>
        </div>

        <div className="service__offer fade-up" ref={addToRefs}>
          <a href="https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2" target="_blank" rel="noreferrer">
            <img src={serviceImg5} alt="service5" className="service__3" />
          </a>
          <h2>UX / UI Projet</h2>
          <p> «Projet Plate Forme Musicale ( Figma ) </p>
          <a href="https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2" target="_blank" rel="noreferrer">
            <i className="bx bxs-share"></i>
          </a>
        </div>


        <div className="service__offer fade-up" ref={addToRefs}>
          <a href="https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2" target="_blank" rel="noreferrer">
            <img src={serviceImg6} alt="service5" className="service__3" />
          </a>
          <h2>UX / UI Projet</h2>
          <p> «Projet Achat Médicament Urgent ( Figma ) </p>
          <a href="https://www.figma.com/proto/mhfgfgtMcv3uRBvZeRPb9J/app-gestion-urgents?node-id=19-22&p=f&t=g5VlE8ip5QL93dN0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A22" target="_blank" rel="noreferrer">
            <i className="bx bxs-share"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
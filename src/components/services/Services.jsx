import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import serviceImg from "../../assets/work1.png";
import serviceImg1 from "../../assets/work2.png";
import serviceImg2 from "../../assets/work3.png";
import serviceImg4 from "../../assets/work5.png";
import serviceImg5 from "../../assets/screen.png";
import serviceImg6 from "../../assets/work6.png"
import serviceImg7 from "../../assets/brainstrada.png"
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

  // Service items data with IDs
  const serviceItems = [
    {
      id: "1",
      title: "School Management",
      image: serviceImg,
      desc: "«Institution Academic Connect: Your Gateway to Crea-tivity and Innovation",
      projectUrl: "https://github.com/Oumbarek-Soufiane/Aim_App",
      type: "site web"
    },
    {
      id: "2",
      title: "School Management",
      image: serviceImg1,
      desc: "«Institution Academic Connect: Your Gateway to Crea-tivity and Innovation El karama Boussaid",
      projectUrl: "https://github.com/Oumbarek-Soufiane/School_Elkarama_App",
      type: "site web"
    },
    {
      id: "3",
      title: "Hackathon Project",
      image: serviceImg2,
      desc: "«Smart Garbage Using Arduino And C++ Language",
      projectUrl: "https://github.com/Oumbarek-Soufiane/project-hackathon",
      type: "Arduino"
    },
    {
      id: "4",
      title: "Chefchaoun Project",
      image: serviceImg4,
      desc: "« Professional Composition Using Adobe Photoshop",
      projectUrl: serviceImg4,
      type: "Illustartion"
    },
    {
      id: "5",
      title: "UX / UI Projet",
      image: serviceImg5,
      desc: "«Projet plateForme de musique avec chat dierct ! ( Figma )",
      projectUrl: "https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2",
      type: "site web"
    },
    {
      id: "6",
      title: "UX / UI Projet",
      image: serviceImg6,
      desc: "«Projet Achat Médicament Urgent En ligne !  ( Figma )",
      projectUrl: "https://www.figma.com/proto/mhfgfgtMcv3uRBvZeRPb9J/app-gestion-urgents?node-id=19-22&p=f&t=g5VlE8ip5QL93dN0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A22",
      type: "application mobile"
    },
    {
      id: "7",
      title: "UX / UI Projet",
      image: serviceImg7,
      desc: "«Projet E-leaning  Web Site!  ( Figma )",
      projectUrl: "https://www.figma.com/proto/H3gw3ZpcEqR7dY9iMsWPuo/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
      type: "Site Web"
    }
    
  ];

  return (
    <div className="works section" id="works">
      <div className="works__header fade-up" ref={worksRef}>
        <h2 className="section__title">Works</h2>
        <span className="section__subtitle">What I realise</span>
      </div>

      <div className="service__offers">
        {serviceItems.map((item) => (
          <div className="service__offer fade-up" ref={addToRefs} key={item.id}>
            <Link to={`${item.projectUrl}`}>
              <img src={item.image} alt={item.title} className="service__img" />
            </Link>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="service__actions">
              
              <a href={`${item.projectUrl}`}  target="_blank" rel="noreferrer" className="project-link ">
                <i className="bx bxs-share"></i>
              </a>
              <p className="type">{item.type}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
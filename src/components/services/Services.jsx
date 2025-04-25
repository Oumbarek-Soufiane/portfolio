import React, { useLayoutEffect, useRef, useState } from "react";
import serviceImg from "../../assets/work1.png";
import serviceImg1 from "../../assets/work2.png";
import serviceImg2 from "../../assets/work3.png";
import serviceImg4 from "../../assets/work5.png";
import serviceImg5 from "../../assets/screen.png";
import "./services.css";

const Services = () => {
  const worksRef = useRef(null);
  const serviceItemsRef = useRef([]);
  const [filter, setFilter] = useState("all");

  useLayoutEffect(() => {
    // Reset refs array when filter changes
    serviceItemsRef.current = [];
    
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

    // Observe each service offer with a slight delay to ensure DOM updates
    setTimeout(() => {
      serviceItemsRef.current.forEach((item) => {
        if (item) observer.observe(item);
      });
    }, 50);

    return () => {
      // Clean up
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
      serviceItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [filter]);

  // Reset refs array when adding a new ref
  const addToRefs = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };

  // Define our projects with categories
  const projects = [
    {
      id: 1,
      image: serviceImg,
      title: "School Management",
      description: "«Institution Academic Connect: Your Gateway to Crea-tivity and Innovation",
      link: "https://github.com/Oumbarek-Soufiane/Aim_App",
      category: "management"
    },
    {
      id: 2,
      image: serviceImg1,
      title: "School Management",
      description: "«Institution Academic Connect: Your Gateway to Crea-tivity and Innovation El karama Boussaid",
      link: "https://github.com/Oumbarek-Soufiane/School_Elkarama_App",
      category: "management"
    },
    {
      id: 3,
      image: serviceImg2,
      title: "Hackathon Project",
      description: "«Smart Garbage Using Arduino And C++ Language",
      link: "https://github.com/Oumbarek-Soufiane/project-hackathon",
      category: "hardware"
    },
    {
      id: 4,
      image: serviceImg4,
      title: "Chefchaoun Project",
      description: "« Professional Composition Using Adobe Photoshop",
      link: serviceImg4,
      download: true,
      category: "design"
    },
    {
      id: 5,
      image: serviceImg5,
      title: "UX / UI Projet",
      description: "«Projet Plate Forme Musicale ( Figma )",
      link: "https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2",
      category: "design"
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="works section" id="works">
      <div className="works__header fade-up" ref={worksRef}>
        <h2 className="section__title">Works</h2>
        <span className="section__subtitle">What I realise</span>
      </div>

      {/* Filter buttons */}
      <div className="works__filter-container">
        <button 
          className={`works__filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`works__filter-btn ${filter === 'management' ? 'active' : ''}`}
          onClick={() => setFilter('management')}
        >
          Management
        </button>
        <button 
          className={`works__filter-btn ${filter === 'hardware' ? 'active' : ''}`}
          onClick={() => setFilter('hardware')}
        >
          Hardware
        </button>
        <button 
          className={`works__filter-btn ${filter === 'design' ? 'active' : ''}`}
          onClick={() => setFilter('design')}
        >
          Design
        </button>
      </div>

      <div className="service__offers">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div className="service__offer fade-up" ref={addToRefs} key={project.id}>
              <a href={project.link} target="_blank" rel="noreferrer">
                <img src={project.image} alt={`service${project.id}`} className={`service__${project.id}`} />
              </a>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                download={project.download ? "" : undefined}
              >
                <i className="bx bxs-share"></i>
              </a>
            </div>
          ))
        ) : (
          <div className="no-projects-message">
            <p>No projects found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
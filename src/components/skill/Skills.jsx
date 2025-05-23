import  { React, useRef, useState,useEffect } from "react";
import "./skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const skillsTitleRef = useRef(null);
      const skillsbackendtab = useRef(null);
      const skillsfrontendtab = useRef(null);
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
          skillsTitleRef.current,
          skillsbackendtab.current,
          skillsfrontendtab.current,
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
   

  const frontendSkills = [
    { name: "HTML", icon: "uil uil-html5", color: "#FF5733" },
    { name: "JavaScript", icon: "uil uil-java-script", color: "#F7DF1E" },
    { name: "CSS", icon: "uil uil-css3-simple", color: "#2965F1" },
    { name: "Figma", icon: "fa-brands fa-figma", color: "#F24E1E" },
    { name: "React", icon: "uil uil-react", color: "#61DAFB" },
    { 
      name: "Next.js", 
      icon: "custom-nextjs",
      color: "#000000",
      customSvg: true 
    },
    { 
      name: "Tailwind", 
      icon: "bx bxl-tailwind-css",
      color: "#38B2AC" 
    },
  ];

  const backendSkills = [
    { name: "PHP", icon: "fa-brands fa-php", color: "#777BB4" },
    { name: "Python", icon: "fa-brands fa-python", color: "#3776AB" },
    { name: "Java", icon: "fa-brands fa-java", color: "#007396" },
    { name: "Laravel", icon: "fa-brands fa-laravel", color: "#FF2D20" },
    { name: "Symfony", icon: "fa-brands fa-symfony", color: "#000000" },
    { name: "J2EE", icon: "uil uil-check-circle", color: "#ED8B00" },
    { name: "Spring Boot", icon: "bx bxl-spring-boot", color: "#6DB33F" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="skills-section" id="skills">
      <div className="skills-header">
        <h1 className="skills-title skills__title  fade-up" ref={skillsTitleRef}>Skills</h1>
        <div className="skills-decoration"></div>
      </div>

      <div className="skills-tabs ">
        <button 
          className={`tab-button ${activeTab === "frontend" ? "active" : ""}`} 
          onClick={() => handleTabClick("frontend")}
        >
          Frontend
          <span className="tab-underline"></span>
        </button>
        <button 
          className={`tab-button ${activeTab === "backend" ? "active" : ""}`} 
          onClick={() => handleTabClick("backend")}
        >
          Backend
          <span className="tab-underline"></span>
        </button>
      </div>

      <div className="skills-container">
        {activeTab === "frontend" && (
          <div className="skills-category " >
            <div className="category-header">
              <h2>Frontend</h2>
              <div className="category-line"></div>
            </div>
            
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <div className="skill-card" key={index} style={{"--skill-color": skill.color}}>
                  <div className="skill-icon-container">
                    {skill.customSvg ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="35"
                        height="35"
                        className="custom-svg-icon"
                        viewBox="0 0 500 301.64"
                      >
                        <path
                          d="M368,427.85h94.3v7.5H376.62v56.41h80.56v7.49H376.62v61.94h86.65v7.5H368Zm102.75,0h10l44.4,61.94,45.39-61.94,61.73-78.67L530.85,496.3l52.26,72.39H572.7l-47.55-65.88-47.74,65.88H467.2l52.65-72.39Zm116.11,7.5v-7.5H694.31v7.5H644.8V568.69h-8.64V435.35ZM250,427.85h10.81l149,223-61.58-82.13L259,438.5l-.4,130.19H250ZM693.44,558.93a3.14,3.14,0,1,1,3.09-3.14A3.05,3.05,0,0,1,693.44,558.93Zm8.5-8.25h4.62a4.22,4.22,0,0,0,4.58,4.19c3,0,4.71-1.81,4.71-5.2V528.19h4.71v21.5c0,6.1-3.53,9.62-9.37,9.62C705.7,559.31,701.94,555.9,701.94,550.68Zm24.78-.28h4.67c.4,2.89,3.22,4.72,7.28,4.72,3.78,0,6.56-2,6.56-4.65,0-2.32-1.77-3.71-5.78-4.66l-3.92-.94c-5.48-1.29-8-3.94-8-8.4,0-5.42,4.42-9,11-9,6.16,0,10.66,3.6,10.94,8.72h-4.59c-.44-2.8-2.88-4.55-6.41-4.55-3.72,0-6.2,1.79-6.2,4.53,0,2.17,1.6,3.41,5.55,4.34l3.34.82c6.22,1.45,8.79,4,8.79,8.55,0,5.81-4.5,9.45-11.69,9.45C731.58,559.31,727.06,555.83,726.72,550.4Z"
                          transform="translate(-250 -349.18)"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <i className={skill.icon}></i>
                    )}
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "backend" && (
          <div className="skills-category  "  >
            <div className="category-header">
              <h2>Backend</h2>
              <div className="category-line"></div>
            </div>
            
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <div className="skill-card" key={index} style={{"--skill-color": skill.color}}>
                  <div className="skill-icon-container">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
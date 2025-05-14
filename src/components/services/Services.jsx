import { React, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import serviceImg from "../../assets/work1.png";
import serviceImg1 from "../../assets/work2.png";
import serviceImg2 from "../../assets/work3.png";
import serviceImg4 from "../../assets/work5.png";
import serviceImg5 from "../../assets/screen.png";
import serviceImg6 from "../../assets/work6.png";
import serviceImg7 from "../../assets/brainstrada.png";
import "./services.css";

const Services = () => {
  // Add state for filtering
  const [selectedCategories, setSelectedCategories] = useState(["all"]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const worksRef = useRef(null);
  const serviceItemsRef = useRef([]);

  // Original service items with standardized category types
  const serviceItems = [
    {
      id: "1",
      title: "School Management",
      image: serviceImg,
      desc: "«Institution Academic Connect: Your Gateway to Creativity and Innovation",
      projectUrl: "https://github.com/Oumbarek-Soufiane/Aim_App",
      type: "web development"
    },
    {
      id: "2",
      title: "School Management",
      image: serviceImg1,
      desc: "«Institution Academic Connect: Your Gateway to Creativity and Innovation El karama Boussaid",
      projectUrl: "https://github.com/Oumbarek-Soufiane/School_Elkarama_App",
      type: "web development"
    },
    {
      id: "3",
      title: "Hackathon Project",
      image: serviceImg2,
      desc: "«Smart Garbage Using Arduino And C++ Language",
      projectUrl: "https://github.com/Oumbarek-Soufiane/project-hackathon",
      type: "arduino"
    },
   
    {
      id: "4",
      title: "UX / UI Projet",
      image: serviceImg5,
      desc: "«Projet plateForme de musique avec chat dierct ! ( Figma )",
      projectUrl: "https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2",
      type: "ux/ui design"
    },
    {
      id: "5",
      title: "UX / UI Projet",
      image: serviceImg6,
      desc: "«Projet Achat Médicament Urgent En ligne !  ( Figma )",
      projectUrl: "https://www.figma.com/proto/mhfgfgtMcv3uRBvZeRPb9J/app-gestion-urgents?node-id=19-22&p=f&t=g5VlE8ip5QL93dN0-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=19%3A22",
      type: "ux/ui design"
    },
    {
      id: "6",
      title: "UX / UI Projet",
      image: serviceImg7,
      desc: "«Projet E-learning  Web Site!  ( Figma )",
      projectUrl: "https://www.figma.com/proto/H3gw3ZpcEqR7dY9iMsWPuo/Untitled?node-id=1-2&starting-point-node-id=1%3A2",
      type: "ux/ui design"
    }
  ];

  // Get unique categories for filtering - specified exact categories to ensure consistent naming
  const categoryList = ["arduino", "web development", "ux/ui design"];
  const categories = ["all", ...categoryList];

  // Filter items based on selected categories
  useEffect(() => {
    if (selectedCategories.includes("all")) {
      setFilteredItems(serviceItems);
    } else {
      const newFilteredItems = serviceItems.filter(item => 
        selectedCategories.includes(item.type.toLowerCase())
      );
      setFilteredItems(newFilteredItems);
    }
  }, [selectedCategories]);

  // Initial load of all items
  useEffect(() => {
    setFilteredItems(serviceItems);
    // Force items to be visible after a short delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  // Handle category selection
  const handleCategoryClick = (category) => {
    if (category === "all") {
      setSelectedCategories(["all"]);
    } else {
      const newSelectedCategories = selectedCategories.includes(category)
        ? selectedCategories.filter(c => c !== category)
        : [...selectedCategories.filter(c => c !== "all"), category];
      
      setSelectedCategories(newSelectedCategories.length ? newSelectedCategories : ["all"]);
    }
  };

  useEffect(() => {
    // Set up the Intersection Observer - backup mechanism
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

    // Reset the refs array when filtered items change
    serviceItemsRef.current = [];
    
    // Re-observe each service offer after filtering
    setTimeout(() => {
      serviceItemsRef.current.forEach((item) => {
        if (item) observer.observe(item);
      });
    }, 100);

    return () => {
      // Clean up
      if (worksRef.current) {
        observer.unobserve(worksRef.current);
      }
      serviceItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, [filteredItems]); // Update when filtered items change

  // Reset refs array when adding a new ref
  const addToRefs = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };

  return (
    <div className="works section" id="works">
      <div className={`works__header fade-up ${isLoaded ? "fade-show" : ""}`} ref={worksRef}>
        <h2 className="section__title">Works</h2>
        <span className="section__subtitle">What I realise</span>
      </div>

      {/* Add filter buttons */}
      <div className="filter-container">
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`filter-btn ${
                selectedCategories.includes(category) ? "active" : ""
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="service__offers">
        {filteredItems.map((item) => (
          <div 
            className={`service__offer fade-up ${isLoaded ? "fade-show" : ""}`} 
            ref={addToRefs} 
            key={item.id}
            style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? "translateY(0)" : "translateY(20px)" }}
          >
            <Link to={`/works/${item.id}`}>
              <img src={item.image} alt={item.title} className="service__img" />
            </Link>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="service__actions">
              <Link to={`/works/${item.id}`} className="project-link">
                <i className="bx bxs-share"></i>
              </Link>
              <p className="type">{item.type}</p>
            </div>
          </div>
        ))}
      </div>

      {/* No results message */}
      {filteredItems.length === 0 && (
        <div className="no-results">
          <p>No projects match your selected filters.</p>
        </div>
      )}
    </div>
  );
};

export default Services;

import {React,useRef,useEffect} from "react";
import "./home.css";
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
const Home = () => {


  const homeref = useRef(null);
  

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
      homeref.current,
     
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
    <section className= "home section " id ="home">
     
      <div className="home_container container grid home__nh fade-up" ref={homeref}>
        <div className="home__content grid">
          <Social />
          <div className="home__img " ></div>
          <Data />
        </div>
        <ScrollDown />  
      </div>
    </section>
  );
};
export default Home;

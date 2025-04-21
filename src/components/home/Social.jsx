import {React,useRef,useEffect} from "react"

const Social = () =>{

    const socialref = useRef(null);
     
   
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
             entry.target.classList.add("fade-show1");
             // Stop observing after animation is triggered
             observer.unobserve(entry.target);
           }
         });
       };
   
       const observer = new IntersectionObserver(handleIntersect, observerOptions);
   
       // Observe footer elements
       const elements = [
         socialref.current,
        
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
  return(
     <div className="home__social dark " >
        <a href="https://www.instagram.com/no_chorus2/#s" className="home__social-icon" target="_blank">
           <i className="uil uil-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/oumbarek-soufiane2a841267" className="home__social-icon" target="_blank">
            <i className="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://github.com/Oumbarek-Soufiane" className="home__social-icon" target="_blank">
           <i className="uil uil-github-alt"></i>
        </a>
     </div>
  )
}

export default Social
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollProgressBar.css'; // We'll create this file next

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculate how far down the page we've scrolled
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Calculate the percentage scrolled (0 to 100)
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', updateScrollProgress);
    
    // Initial calculation
    updateScrollProgress();
    
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, [location]); // Re-run effect when route changes

  return (
    <div className="scroll-progress-container">
      <div 
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
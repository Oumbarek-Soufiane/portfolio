import React, { useEffect, useRef, useState } from 'react';
import "./contact.css";
import emailjs from '@emailjs/browser';

// Create a simple custom alert component instead of using Material UI
const SuccessAlert = ({ show }) => {
  if (!show) return null;
  
  return (
    <div className="success-alert">
      <div className="success-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </div>
      <div className="success-message">Message sent successfully!</div>
    </div>
  );
};

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const conatctTitleRef = useRef(null);
  const contactsubtitleRef = useRef(null);
  const contactlinksRef = useRef(null);
  
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_hkua95m','template_6kdp65e',e.target,'rtqr-ns5mzP3qMk2p')
      .then((result) => {
        setFormSubmitted(true);
        e.target.reset();
        // Hide the success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }, (error) => {
        console.log(error.text);
      });
  }
  
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
      conatctTitleRef.current,
      contactsubtitleRef.current,
      contactlinksRef.current,
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
    <>
      <section className="contact section container" id="contact">
        <h2 className="section__title contact__title fade-up" ref={conatctTitleRef}>Contact</h2>
        <span className="section__subtitle contact__subtitle fade-up" ref={contactsubtitleRef}>Get In Touch</span>

        <div className="contact__container contact__links fade-up" ref={contactlinksRef}>
          <div className="talk__me">
            <h4>Talk To Me</h4>
            <div className="mail__container">
              <div>
                <i className="bx bx-mail-send"></i>
              </div>
              <div>
                <p className="contact__title">Email</p>
              </div>
              <div>
                <p>soufianeoump6@gmail.com</p>
              </div>
              <div className="contact__icon">
                <a href="mailto:soufianeoump6@gmail.com" className="contact__button">
                  Write Me{" "}
                  <i className="contact__button-icon uil uil-arrow-right"></i>
                </a>
              </div>
            </div>

            <div className="whatssap__container">
              <div>
                <i className="fa-brands fa-whatsapp"></i>
              </div>
              <div>
                <p className="contact__title">Whatssap Business</p>
              </div>
              <div>
                <p>+212 652608908</p>
              </div>
              <div>
                <a href="https://api.whatssap.com/send?phone=+212652608908&text=Hello, more information!" className="contact__button">
                  Write Me{" "}
                  <i className="contact__button-icon uil uil-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="form__container">
            <h4>Write me your project</h4>
            <div className={`alert-container ${formSubmitted ? 'show' : ''}`}>
              <SuccessAlert show={formSubmitted} />
            </div>
            <form className="contact__form" onSubmit={sendEmail}>
              <div className="contact__form-div">
                <label htmlFor="contact__form-tag">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  className="contact__form-input"
                  placeholder="Insert your name"
                  required
                />
              </div>

              <div className="contact__form-div">
                <label htmlFor="contact__form-tag">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  className="contact__form-input"
                  placeholder="Insert your email"
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label htmlFor="contact__form-tag">Project</label>
                <textarea 
                  cols="30" 
                  rows="10" 
                  name="message" 
                  className="contact__form-input"
                  placeholder="Insert your project"
                  required
                />
              </div>

              <button className="button button--flex">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="button__icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z" fill="var(--container-color)"/>
                  <path d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z" fill="var(--container-color)"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
      <style jsx>{`
        .success-alert {
          display: flex;
          align-items: center;
          background-color: #d4edda;
          color: #155724;
          padding: 12px 16px;
          border-radius: 4px;
          margin-bottom: 16px;
          border-left: 4px solid #28a745;
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeIn 0.3s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .alert-container.show {
          display: block;
        }
        
        .alert-container {
          display: none;
          transition: all 0.3s ease;
        }
        
        .success-icon {
          color: #28a745;
          margin-right: 12px;
          display: flex;
          align-items: center;
        }
        
        .success-message {
          font-weight: 500;
        }
      `}</style>
    </>
  );
};

export default Contact;
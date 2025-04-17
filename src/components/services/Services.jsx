import React from "react";
import serviceImg from "../../assets/work1.png";
import serviceImg1 from "../../assets/work2.png";
import serviceImg2 from "../../assets/work3.png";
import serviceImg4 from "../../assets/work5.png";
import serviceImg5 from "../../assets/screen.png";
import "./services.css";
const Services = () => {
  return (
    <div className="services section " id="works">
      <h2 className="section__title">Works</h2>
      <span className="section__subtitle">What I realise</span>

      <div className="service__offers">
        <div className="service__offer">
          <a href="https://github.com/Oumbarek-Soufiane/Aim_App">
            <img src={serviceImg} alt="service1" className="service__1" />
          </a>
          <h2>School Management</h2>
          <p>
            «Institution Academic Connect: Your Gateway to Crea-tivity and
            Innovation
          </p>
          <a href="https://github.com/Oumbarek-Soufiane/Aim_App">
            <i class="bx bxs-share"></i>
          </a>
        </div>

        <div className="service__offer">
          <a href="https://github.com/Oumbarek-Soufiane/School_Elkarama_App" target="_blank">
            <img src={serviceImg1} alt="service2" className="service__2" />
          </a>
          <h2>School Management</h2>
          <p>
            «Institution Academic Connect: Your Gateway to Crea-tivity and
            Innovation El karama Boussaid 
          </p>
          <a href="https://github.com/Oumbarek-Soufiane/School_Elkarama_App" target="_blank">
            <i class="bx bxs-share"></i>
          </a>
        </div>

        <div className="service__offer">
          <a href="https://github.com/Oumbarek-Soufiane/project-hackathon"  target="_blank">
            <img src={serviceImg2} alt="service3" className="service__3" />
          </a>
          <h2>Hackathon Project</h2>
          <p> «Smart Garbage Using Arduino And C++ Language </p>
          <a href="https://github.com/Oumbarek-Soufiane/project-hackathon" target="_blank">
            <i class="bx bxs-share"></i>
          </a>
        </div>

        <div className="service__offer">
          <img src={serviceImg4} alt="service4" className="service__4" />
          <h2>Chefchaoun Project</h2>
          <p> « Professional Composition Using Adobe Photoshop </p>
          <a download="" href={serviceImg4} target="_blank">
            <i class="bx bxs-share"></i>
          </a>
        </div>
          <div className="service__offer">
          <a href="https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2" target="_blank">
            <img src={serviceImg5} alt="service5" className="service__3"  />
          </a>
          <h2>UX / UI Projet</h2>
          <p> «Projet Plate Forme Musicale ( Figma ) </p>
          <a href="https://www.figma.com/proto/CsG3AGJGc5ZykHu2tZwkYP/projet-ux-ui?node-id=2-2" target="_blank">
            <i class="bx bxs-share"></i>
            
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;

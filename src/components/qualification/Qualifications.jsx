import {react,  useState } from "react";
import "./qualification.css";
const Qualification = () => {
  const [toggleState,setToggleState] = useState(1);

  const toggleTab = (index) =>{
      setToggleState(index);
  };
  return (
    <section className="services section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personnal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div className={toggleState === 1 
                          ? "qualification__button qualification-active button--flex"
                          : "qualification__button button--flex"
                        } 
                        onClick={() =>toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon dark"></i>
            Education
          </div>

          <div className={toggleState === 2 
                          ? "qualification__button qualification-active button--flex"
                          : "qualification__button button--flex"
                        }
                        onClick={() =>toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification__icon dark"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 
                         ? "qualification__content qualification__content-active"
                         : "qualification__content"
          }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"> BTS Diplomat</h3>
                  <span className="qualification__subtitle">
                  Multimedia And Web Conception </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2021 - 2023 
                  </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>


              <div>
                <h3 className="qualification__title">ENS Tetouan</h3>
                  <span className="qualification__subtitle">
                     Software And Web Developement
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023 - 2024
                  </div>
              </div>

            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">DENSAD Diplomat</h3>
                  <span className="qualification__subtitle">
                    ENSAD Mohammedia</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2024 - 2027 Current
                  </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              
              
            </div>
          </div>


          <div className={toggleState === 2
                         ? "qualification__content qualification__content-active"
                         : "qualification__content"
          }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Intern Web Developer</h3>
                  <span className="qualification__subtitle">
                    Regional Tresury</span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2022 - 2023 
                  </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>


              <div>
                <h3 className="qualification__title">Intern Web Developer</h3>
                  <span className="qualification__subtitle">
                  Elkarama Boussaid School
                  </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023 - 2024
                  </div>
              </div>

            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Certificate </h3>
                  <span className="qualification__subtitle"> Hackathon Smart Cities
                    </span>
                  <div className="qualification__calender">
                    <i className="uil uil-calendar-alt"></i> 2023 - 2024
                  </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Skills from "./components/skill/Skills";
import About from "./components/about/About";
import Services from "./components/services/Services";
import ServiceDetail from "./components/detail_services/ServiceDetail";
import Qualifications from './components/qualification/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollProgressBar from './components/scrollBar/ScrollProgressBar';
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Composant qui regroupe toutes les sections pour la page d'accueil
const Homepage = () => {
  return (
    <>
   
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualifications />
      <Contact />
    </>
  );
};

function App() {
  return (
    
    <Router>
      <Header />
        <ScrollProgressBar />
      <main className='main'>
        <Routes>
          {/* Redirection de la racine vers /portfolio */}
          <Route path="/" element={<Navigate to="/portfolio" replace />} />
          
          {/* Page d'accueil avec toutes les sections */}
          <Route path="/portfolio" element={<Homepage />} />
          
          {/* Pages individuelles pour chaque section */}
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/works" element={<Services />} />
          <Route path="/works/:id" element={<ServiceDetail />} />
          <Route path="/qualification" element={<Qualifications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
import React from 'react';
import { HashRouter, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/home/Home'; // Assurez-vous que ces imports sont corrects
import About from './components/about/About';
import Services from './components/services/Services';
import WorkDetail from './components/detail_services/ServiceDetail';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  // Déterminer si nous devons utiliser HashRouter ou BrowserRouter
  // HashRouter est recommandé pour GitHub Pages
  const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;
  
  // Déterminer le basename pour les routes
  const basename = process.env.PUBLIC_URL || '';

  return (
    <Router basename={basename}>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Services />} />
          <Route path="/works/:id" element={<ServiceDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
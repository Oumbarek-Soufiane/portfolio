import react from 'react'
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Skills from "./components/skill/Skills";
import About from "./components/about/About";
import Services from "./components/services/Services"
import Qualifications from './components/qualification/Qualifications';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
     <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Qualifications/>
      <Contact/>
      <Footer/>
    </main>
    </>
  )
}
export default App

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import './style/index.css';
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'
import Agustin from './pages/agustin.jsx';
import Aboutme from './pages/aboutme.jsx';
import Projects from './pages/projects.jsx';
import Skill from './pages/skills.jsx';
import Education from './pages/education.jsx';
import ScrollReveal from './functions/ScrollReveal.jsx';


const App = () => {
  return (
    <>
   
      <Header id="Header"/>
    
      <ScrollReveal>
        <Agustin id="Agustin"/>
      </ScrollReveal>
      <ScrollReveal>
        <Aboutme id="Aboutme"/>
      </ScrollReveal>
      <ScrollReveal>
        <Projects id="Projects"/>
      </ScrollReveal>
      <ScrollReveal>
        <Skill id="Skills"/>
      </ScrollReveal>
      <ScrollReveal>
        <Education id="Education"/>
      </ScrollReveal>
      <ScrollReveal>
        <Footer id="Contactme"/>
      </ScrollReveal>
    </>
  );
};
   

export default App;

